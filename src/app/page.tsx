"use client"
import React, { useEffect, useState } from "react";
import Section from "@/components/section";
import { fetchTopics } from "@/services/topicService";

interface Topic {
  id: number;
  name: string;
}

export default function Home() {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const getTopics = async () => {
      try {
        const data = await fetchTopics();
        setTopics(data);
      } catch (err) {
        console.error(err);
      } 
    };

    getTopics();
  }, []);

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
          {topics.map((topic) => (
            <Section
              key={topic.id}
              id={topic.id}
              title={topic.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
