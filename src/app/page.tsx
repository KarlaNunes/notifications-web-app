
import Section from "@/components/section"
import { sections } from "@/lib/sectionsStaticData"


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
          {sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              description={section.description}
              notifications={section.notifications}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
