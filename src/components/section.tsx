// src/components/Section.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Notification from './notification';
import { EmptyNotifications } from './emptyNotifications';
import socket from '@/socket';

interface NotificationProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  time: string;
}

interface SectionProps {
  title: string;
  description: string;
  notifications: NotificationProps[];
}

const Section: React.FC<SectionProps> = ({ title, description, notifications }) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [ws, setWs] = useState<WebSocket | null>(null);
  // const [messages, setMessages] = useState<NotificationProps[]>(notifications);

  useEffect(() => {
    if (ws === null) {
      const token = '3e1978056c485cf7219e0dfaf3e4cbfd5667ce1d'; // Substitua com o token real
      const socket = new WebSocket(`ws://localhost:8000/ws/notifications/?token=${token}`);
      
      socket.onopen = () => {
        console.log("Connected to WebSocket");
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("SURTO: ", data);
        // setMessages(prevMessages => [...prevMessages, data]);
      };

      socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      socket.onclose = () => {
        console.log("WebSocket connection closed");
      };

      setWs(socket);
    }

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [ws]);

  const handleSubscribe = (topic: string) => {
    const message = {
      type: 'subscribe',
      topic: topic,
    };
    setIsSubscribed(true);
    if (ws) {
      ws.send(JSON.stringify(message));
    }
  };

  const handleUnsubscribe = (topic: string) => {
    const message = {
      type: 'unsubscribe',
      topic: topic,
    };
    setIsSubscribed(false);
    if (ws) {
      ws.send(JSON.stringify(message));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Button variant="outline" onClick={() => isSubscribed ? handleUnsubscribe('Security') : handleSubscribe('Security')}>
          {isSubscribed ? 'Subscribed' : 'Unsubscribed'}
        </Button>
      </div>
      <div className="mt-4 space-y-4">
        {notifications.length === 0 ? (
            <EmptyNotifications />
          ) : (
            notifications.map((notification, index) => (
              <Notification key={index} {...notification} />
            ))
          )}
      </div>
    </div>
  );
};

export default Section;
