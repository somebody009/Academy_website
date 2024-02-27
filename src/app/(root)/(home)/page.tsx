import { FadeIn } from "@/components/ui/FadeIn"
import OurPrograms from "./homepagesections/exploreprograms/OurPrograms"

import Hero from "./homepagesections/Hero/Hero"
import IndustryExperts from "./homepagesections/IndustryExperts"
import LearnerReview from "./homepagesections/LearnerReview"
import Lms from "./homepagesections/Lms"

export default function Home() {
  return (
    <>
      <FadeIn>
        <Hero />
        <OurPrograms />
        <IndustryExperts />
        <Lms />
        <LearnerReview />
      </FadeIn>
    </>
  )
}
