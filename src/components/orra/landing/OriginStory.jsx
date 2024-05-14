import React from 'react'
import { Container } from '@/components/orra/landing/Container'

export function OriginStory() {
  return (
    <section
      aria-label="Marketing tailored for your podcasts"
      className="text-center relative overflow-hidden bg-gray-100 py-16"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-left py-4 mb-10">
          <h2 className="font-display text-3xl tracking-tight text-gray-800 sm:text-4xl">
            Orra&apos;s Back Story 🔮
          </h2>
          <p className="text-gray-800 text-md mb-4 mt-6">
            Every new product has a good back story.
          </p>
          <p className="text-gray-800 text-md mb-4">
            Orra began life as a podcasts marketing platform. You might be wondering how a couple of founders can go from
            building a podcasts marketing platform to an AI agents workflow orchestration platform?!
          </p>
          <p className="text-gray-800 text-md mb-4">
            The answer lies in our AI-first approach. We needed to create a Multi-Agent solution that
            utilised LLMs. Then we got stuck, spending more than a month in the weeds without actually delivering
            anything useful. Finally we got something shipped!
          </p>
          <p className="text-gray-800 text-md mb-4 font-semibold">
            And, in the process we created a conceptual framework for
            how to build, orchestrate and deploy Agents. After experiencing this frustration, the idea of building this
            conceptual framework into a product would not leave us alone!
          </p>
          <p className="text-gray-800 text-md mb-4">
            So, that&apos;s how we got to now.
          </p>
          <p className="text-gray-800 text-md mb-4">
            Join our waitlist to stay in the loop. Orra for developers is coming soon.
          </p>
          <p className="text-gray-800 text-md mb-4">
            <span className="font-semibold">Aisha and Ezo</span>
            <br/>
            <span className="text-gray-800 text-md">Orra Co-founders</span>
          </p>
          <p className="tracking-tight text-gray-800 text-md mb-4 font-medium">
            May 2024
          </p>
        </div>
      </Container>
    </section>
  )
}
