"use client";
import React from 'react';
import { EmptyNotifications } from './emptyNotifications';


interface NotificationProps {
  title: string;
  message: string;
  created_at: string;
  isSubscribed: boolean;
}

const Notification: React.FC<NotificationProps> = ({ title, message, created_at }) => {
  return (
    <div className="flex items-start gap-4 rounded-md bg-muted p-4">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">
          {message.includes("Connected") ? (
            <EmptyNotifications /> 
          ) : (
              message
            )} 
        </p>
        <p className="text-sm text-muted-foreground">{created_at}</p>
      </div>
    </div>
  );
};

export default Notification;
