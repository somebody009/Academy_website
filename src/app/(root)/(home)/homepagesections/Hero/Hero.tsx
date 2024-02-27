import React from "react"
import AnimatedText2 from "@/components/AnimatedTexts/AnimatedText2"
import AnimatedTextH1 from "@/components/AnimatedTexts/AnimatedTextH1"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { Container } from "@/components/ui/Container"
import { GridPattern } from "@/components/ui/GridPattern"
import { Section } from "@/components/ui/Section"
import HiringCompanies from "./HiringCompanies"
import Rating from "./Rating"
import TrendingPrograms from "./TrendingPrograms"

export interface IHeroProps {}

export default function Hero() {
  return (
    <Section className="relative !p-0">
      <GridPattern
        className="absolute inset-0 z-[-10] mx-auto size-full items-center justify-center fill-[#f4f9ffc7] stroke-neutral-950/5 text-black [mask-image:linear-gradient(to_right,transparent,white_10%,white_100%,transparent)]"
        yOffset={26}
        interactive
      />
      <Container className="relative z-10 font-bold text-black">
        <div className="bg-gradient-to-b from-white/80 to-white/20 bg-clip-text pb-0 text-transparent">
          <BackgroundGradientAnimation>
            <AnimatedTextH1
              className="max-w-3xl p-4 font-medium text-black 2xl:max-w-4xl"
              text="Unlock High-Demand Tech Skills Effortlessly! "
            />
            <AnimatedText2
              className="max-w-100 mt-2 p-4 text-black md:mt-6 md:max-w-5xl 3xl:max-w-6xl"
              text="DataSpace Academy, the education arm of Satts Cyber Technology Private Limited, provides over 100 courses to cultivate skilled professionals aligned with the latest global trends, ensuring their impact in the industry."
            />
            <TrendingPrograms />
            <HiringCompanies />
            <Rating />
          </BackgroundGradientAnimation>
        </div>
      </Container>
    </Section>
  )
}
