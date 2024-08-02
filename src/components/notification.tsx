import React from 'react';
import CheckIcon from './icons/checkIcon';
import CircleAlertIcon from './icons/circleAlertIcon';
import CreditCardIcon from './icons/creditCardIcon';
import DollarSignIcon from './icons/dollarSignIcon';
import ShieldIcon from './icons/shieldIcon';
import TriangleAlertIcon from './icons/triangleAlertIcon';

interface NotificationProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  time: string;
}

const Notification: React.FC<NotificationProps> = ({ icon: Icon, title, description, time }) => {
  return (
    <div className="flex items-start gap-4 rounded-md bg-muted p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-sm text-muted-foreground">{time}</p>
      </div>
    </div>
  );
};

export default Notification;
