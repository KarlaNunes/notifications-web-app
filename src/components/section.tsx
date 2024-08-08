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
  token: string;
}

const Section: React.FC<SectionProps> = ({ title, description, notifications, token }) => {

  useEffect(() => {
    socket.auth = { token };
    socket.connect();

    socket.on('connect', () => {
      console.log('Conectado ao WebSocket');
    });

    socket.on('message', (data: string) => {
      const parsedData = JSON.parse(data);
      console.log('Mensagem recebida:', parsedData);
    });

    socket.on('disconnect', () => {
      console.log('Desconectado do WebSocket');
    });

    return () => {
      socket.off('connect');
      socket.off('message');
      socket.off('disconnect');
      socket.disconnect();
    };
  }, [token]);

  const handleSubscribe = (topic: string) => {
    const message = {
      type: 'subscribe',
      topic: topic,
    };
    socket.emit('message', JSON.stringify(message));
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Button variant="outline" onClick={() => handleSubscribe('Security')}>Subscribe</Button>
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
