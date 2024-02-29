import { FadeIn } from "@/components/ui/FadeIn"
import DownloadApp from "./homepagesections/DownloadApp"
import OurPrograms from "./homepagesections/exploreprograms/OurPrograms"

import Hero from "./homepagesections/Hero/Hero"
import IndustryExperts from "./homepagesections/IndustryExperts"
import LearnerReview from "./homepagesections/LearnerReview"
import Lms from "./homepagesections/Lms"
import SkillupCourses from "./homepagesections/SkillupCourses"
import UpcomingEvents from "./homepagesections/upcomingEvents"

export default function Home() {
  return (
    <>
      <FadeIn>
        <Hero />

        <OurPrograms />
        <IndustryExperts />
        <Lms />
        <LearnerReview />
        <UpcomingEvents />
        <SkillupCourses />
        <DownloadApp />
      </FadeIn>
    </>
  )
}
