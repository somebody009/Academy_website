import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import React from "react"

const upcomingEvents = () => {
  return (
    <Section>
      <Container>
        <h2 className="h4 text-center !font-medium text-black">Upcoming Events</h2>
        <p className="mx-auto text-center md:max-w-5xl 3xl:max-w-6xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Container>
    </Section>
  )
}

export default upcomingEvents
