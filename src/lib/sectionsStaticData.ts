import { notifications } from "./notificationsStaticData";

export const sections = [
    { 
        title: "Status", 
        description: "Get the latest updates on the status of our systems.", 
        notifications: notifications.status 
    },
    { 
        title: "Security", 
        description: "Important security notifications and updates.", 
        notifications: notifications.security 
    },
    { 
        title: "Billing", 
        description: "Updates on your billing and payment information.", 
        notifications: notifications.billing 
    },
]