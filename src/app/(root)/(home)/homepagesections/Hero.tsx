import * as React from "react"
import AnimatedTextH1 from "@/components/AnimatedTexts/AnimatedTextH1"
import AnimatedTextH2 from "@/components/AnimatedTexts/AnimatedTextH2"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import HiringCompanies from "./HiringCompanies"
import Rating from "./Rating"
import TrendingPrograms from "./TrendingPrograms"

export interface IHeroProps {}

export default function Hero() {
  return (
    <>
      <BackgroundGradientAnimation>
      <Container className="inset-0 z-50  font-bold !text-black ">
        <Section className="bg-gradient-to-b from-white/80 to-white/20 bg-clip-text p-0 text-transparent ">
          <AnimatedTextH1
            className="max-w-3xl font-medium text-black 2xl:max-w-4xl"
            text="Unlock High-Demand Tech Skills Effortlessly! "
          />
          <AnimatedTextH2
            className="3xl:max-w-6xl mt-6 max-w-5xl  text-black"
            text="DataSpace Academy, the education arm of Satts Cyber Technology Private Limited, provides over 100 courses to cultivate skilled professionals aligned with the latest global trends, ensuring their impact in the industry ."
          />
          <TrendingPrograms />
          <HiringCompanies />
          <Rating />
        </Section>

        {/* <HeroBackground /> */}
      </Container>
      </BackgroundGradientAnimation>
    </>
  )
}
