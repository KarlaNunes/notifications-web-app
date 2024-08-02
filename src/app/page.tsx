import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Real-Time Notifications</h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Stay informed about the latest updates and events with our real-time notification system.
          </p>
        </div>
        <div className="mt-12 space-y-8">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Status</h2>
                <p className="text-muted-foreground">Get notified about system status updates.</p>
              </div>
              <Button variant="outline">Subscribe</Button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-4 rounded-md bg-muted p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Server Maintenance Completed</p>
                  <p className="text-sm text-muted-foreground">
                    Our scheduled server maintenance has been completed. All systems are now back online.
                  </p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-md bg-muted p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <TriangleAlertIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Partial Outage Detected</p>
                  <p className="text-sm text-muted-foreground">
                    We are currently experiencing a partial outage affecting some of our services. Our team is working
                    to resolve the issue as soon as possible.
                  </p>
                  <p className="text-sm text-muted-foreground">30 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Security</h2>
                <p className="text-muted-foreground">Get notified about security updates and incidents.</p>
              </div>
              <Button variant="outline">Subscribe</Button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-4 rounded-md bg-muted p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ShieldIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Security Patch Released</p>
                  <p className="text-sm text-muted-foreground">
                    A new security patch has been released to address a critical vulnerability. Please update your
                    systems as soon as possible.
                  </p>
                  <p className="text-sm text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-md bg-muted p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CircleAlertIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Suspicious Activity Detected</p>
                  <p className="text-sm text-muted-foreground">
                    Our security systems have detected suspicious activity on your account. Please review your account
                    activity and contact us if you have any concerns.
                  </p>
                  <p className="text-sm text-muted-foreground">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Billing</h2>
                <p className="text-muted-foreground">Get notified about billing updates and changes.</p>
              </div>
              <Button variant="outline">Subscribe</Button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-4 rounded-md bg-muted p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <DollarSignIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Invoice Generated</p>
                  <p className="text-sm text-muted-foreground">
                    Your monthly invoice for the previous billing period is now available. Please review and make your
                    payment.
                  </p>
                  <p className="text-sm text-muted-foreground">5 days ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-md bg-muted p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CreditCardIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Payment Due</p>
                  <p className="text-sm text-muted-foreground">
                    Your payment for the current billing period is due in 7 days. Please ensure your payment is made on
                    time to avoid any service interruptions.
                  </p>
                  <p className="text-sm text-muted-foreground">1 week ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function CircleAlertIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  )
}


function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function TriangleAlertIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}