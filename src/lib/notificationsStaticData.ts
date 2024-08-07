import CheckIcon from "@/components/icons/checkIcon";
import CircleAlertIcon from "@/components/icons/circleAlertIcon";
import CreditCardIcon from "@/components/icons/creditCardIcon";
import DollarSignIcon from "@/components/icons/dollarSignIcon";
import ShieldIcon from "@/components/icons/shieldIcon";
import TriangleAlertIcon from "@/components/icons/triangleAlertIcon";

export const notifications = {
    status: [
      // {
      //   icon: CheckIcon,
      //   title: "Server Maintenance Completed",
      //   description: "Our scheduled server maintenance has been completed. All systems are now back online.",
      //   time: "2 hours ago",
      // },
      // {
      //   icon: TriangleAlertIcon,
      //   title: "Partial Outage Detected",
      //   description: "We are currently experiencing a partial outage affecting some of our services. Our team is working to resolve the issue as soon as possible.",
      //   time: "30 minutes ago",
      // },
    ],
    security: [
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
    ],
    billing: [
      {
        icon: DollarSignIcon,
        title: "Invoice Generated",
        description: "Your monthly invoice for the previous billing period is now available. Please review and make your payment.",
        time: "5 days ago",
      },
      {
        icon: CreditCardIcon,
        title: "Payment Due",
        description: "Your payment for the current billing period is due in 7 days. Please ensure your payment is made on time to avoid any service interruptions.",
        time: "1 week ago",
      },
    ],
  }