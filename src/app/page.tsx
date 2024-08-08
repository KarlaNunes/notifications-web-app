
import Section from "@/components/section"
import { sections } from "@/lib/sectionsStaticData"


export default function Home() {
  const token = '3e1978056c485cf7219e0dfaf3e4cbfd5667ce1d';

  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="px-4 md:px-6">
        <div className="space-y-4 text-left">
          <h1 className="text-[44px] font-bold tracking-tighter">Receba suas notificações em tempo real</h1>
          <p className="text-[20px] mx-auto text-muted-foreground">
            Mantenha-se informado sobre as últimas atualizações e eventos com nosso sistema de notificação em tempo real.
          </p>
        </div>
        <div className="mt-12 space-y-8">
          {sections.map((section, index) => (
            <Section
              token={token}
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
