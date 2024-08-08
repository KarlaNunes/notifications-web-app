// src/components/Section.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Notification from './notification';
import { EmptyNotifications } from './emptyNotifications';
import { fetchSubscriptions } from '@/services/subscriptionsService';

interface NotificationProps {
  title: string;
  message: string;
  created_at: string;
}

interface Subscription {
  id: number;
  topic_name: string;
}

interface SectionProps {
  id: number;
  title: string;
}

const Section: React.FC<SectionProps> = ({ id, title }) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [notification, setNotification] = useState<NotificationProps | null>(null);

  useEffect(() => {
    const token = 'acaee9191ae3ec2545b3a28d6288f4a4ab754d8e';

    const checkSubscription = async () => {
      try {
        const subscriptions: Subscription[] = await fetchSubscriptions(token);
        const subscribed = subscriptions.some(subscription => subscription.topic_name === title);
        setIsSubscribed(subscribed);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      }
    };

    checkSubscription();

    if (ws === null) {
      const socket = new WebSocket(`ws://localhost:8000/ws/notifications/?token=${token}`);
      
      socket.onopen = () => {
        console.log("Connected to WebSocket");
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setNotification(data);
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
  }, [ws, id, title]);

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
        </div>
        <Button variant="outline" onClick={() => isSubscribed ? handleUnsubscribe(title) : handleSubscribe(title)}>
          {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </Button>
      </div>
      <div className="mt-4 space-y-4">
        {isSubscribed && notification ? (
          <Notification isSubscribed={isSubscribed} {...notification} />
        ) : (
          <EmptyNotifications />
        )}
      </div>
    </div>
  );
};

export default Section;
