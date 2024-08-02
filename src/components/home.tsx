import React from 'react';
import { Button } from "@/components/ui/button";
import Section from './section';
import CheckIcon from './icons/checkIcon';
import CircleAlertIcon from './icons/circleAlertIcon';
import CreditCardIcon from './icons/creditCardIcon';
import DollarSignIcon from './icons/dollarSignIcon';
import ShieldIcon from './icons/shieldIcon';
import TriangleAlertIcon from './icons/triangleAlertIcon';

const Home: React.FC = () => {
  const statusNotifications = [
    {
      icon: CheckIcon,
      title: "Server Maintenance Completed",
      description: "Our scheduled server maintenance has been completed. All systems are now back online.",
      time: "2 hours ago",
    },
    {
      icon: TriangleAlertIcon,
      title: "Partial Outage Detected",
      description: "We are currently experiencing a partial outage affecting some of our services. Our team is working to resolve the issue as soon as possible.",
      time: "30 minutes ago",
    },
  ];

  const securityNotifications = [
    {
      icon: ShieldIcon,
      title: "Security Patch Released",
      description: "A new security patch has been released to address a critical vulnerability. Please update your systems as soon as possible.",
      time: "1 day ago",
    },
    {
      icon: CircleAlertIcon,
      title: "Suspicious Activity Detected",
      description: "Our security systems have detected suspicious activity on your account. Please review your account activity and contact us if you have any concerns.",
      time: "3 days ago",
    },
  ];

  const billingNotifications = [
    {
      icon: DollarSignIcon,
      title: "Invoice Generated",
      description: "Your monthly invoice for the previous billing period is now available. Please review and make your payment.",
      time: "2 days ago",
    },
    {
      icon: CreditCardIcon,
      title: "Payment Method Updated",
      description: "Your payment method has been successfully updated. You can now use your new card for future transactions.",
      time: "5 days ago",
    },
  ];

  return (
    <div className="space-y-8 p-8">
      <Section
        title="Status"
        description="Get notified about system status updates."
        notifications={statusNotifications}
      />
      <Section
        title="Security"
        description="Get notified about security updates and incidents."
        notifications={securityNotifications}
      />
      <Section
        title="Billing"
        description="Get notified about billing updates and changes."
        notifications={billingNotifications}
      />
    </div>
  );
};

export default Home;
