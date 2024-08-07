import { BellIcon } from "@radix-ui/react-icons";

export function EmptyNotifications() {
    return (
        <div className="flex min-h-[300px] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
                <BellIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground">No Notifications</h3>
                <p className="mt-2 text-sm text-muted-foreground">There are no new notifications for this topic.</p>
            </div>
        </div>
    );
}