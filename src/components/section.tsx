import React from 'react';
import { Button } from '@/components/ui/button';
import Notification from './notification';

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
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Button variant="outline">Subscribe</Button>
      </div>
      <div className="mt-4 space-y-4">
        {notifications.map((notification, index) => (
          <Notification key={index} {...notification} />
        ))}
      </div>
    </div>
  );
};

export default Section;
