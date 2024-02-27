import Image from "next/image"
import Link from "next/link"
import React, { useId } from "react"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import { InfiniteMoving } from "@/components/ui/InfiniteMoving"
import { Section } from "@/components/ui/Section"
import { learnersReviewLowerCarousel, learnersReviewUpperCarousel } from "@/constants"

const LearnerReview = () => {
  const id = useId()
  return (
    <Section className=" bg-white p-0 bg-grid-black/[0.05]">
      <Container>
        <h2 className="h4 text-center !font-medium text-black">Trusted by learners around the world</h2>
        <div className="  relative flex w-full flex-col items-center  justify-center gap-2 overflow-hidden rounded-md bg-white py-4 antialiased ">
          <InfiniteMoving direction="right" speed="slow" className="">
            {learnersReviewUpperCarousel.map((item, index) => {
              const isEven = index % 2 === 0 // Check if index is even
              return (
                <Card
                  className={` w-[320px] p-4 sm:!w-[520px] ${isEven ? "border-none bg-black font-medium !text-white" : ""}`}
                  key={`${id}-${item.learner_Name}`}
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="basis-1/6 self-center">
                      <Image
                        src={item.learner_Image}
                        className="mx-auto aspect-square max-h-16 max-w-16 rounded-full shadow-sm"
                        alt={`${item.learner_Name} - "Learner Review"`}
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="basis-5/6">
                      <h5 className={`h5 !font-medium ${isEven ? " text-white " : ""}`}>{item.learner_Name}</h5>
                      <p className="p base-regular">{item.learner_Position}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 p-4">
                    <p className="p small-regular">{item.learner_review}</p>
                  </div>
                </Card>
              )
            })}
          </InfiniteMoving>
          <InfiniteMoving direction="left" speed="slow" className="">
            {learnersReviewLowerCarousel.map((item, index) => {
              const isEven = index % 2 === 0 // Check if index is even
              return (
                <Card
                  className={`w-[320px] p-4 sm:!w-[520px] ${isEven ? "border-none bg-black font-medium text-white" : ""}`}
                  key={`${id}-${item.learner_Name}`}
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="basis-1/6 self-center">
                      <Image
                        src={item.learner_Image}
                        className="mx-auto aspect-square max-h-16 max-w-16 rounded-full shadow-sm"
                        alt={`${item.learner_Name} - "Learner Review"`}
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="basis-5/6">
                      <h5 className={`h5 !font-medium ${isEven ? " text-white " : ""}`}>{item.learner_Name}</h5>
                      <p className="p base-regular">{item.learner_Position}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 p-4">
                    <p className="p small-regular">{item.learner_review}</p>
                  </div>
                </Card>
              )
            })}
          </InfiniteMoving>
        </div>
      </Container>
      <Container className="mt-12">
        <h2 className="h4 text-center !font-medium text-black">We got featured!</h2>
        <div className="mx-auto flex flex-wrap justify-center gap-8 py-6 sm:flex-row sm:flex-nowrap">
          <Link href="/">
            <Image src={"/images/ed.png"} className="w-[160px] sm:w-auto" alt="" width={300} height={300} />
          </Link>
          <Link href="/">
            <Image src={"/images/blogrizm.png"} className="w-[160px] sm:w-auto" alt="" width={300} height={300} />
          </Link>
          <Link href="/">
            <Image src={"/images/mid-day.png"} className="w-[160px] sm:w-auto" alt="" width={300} height={300} />
          </Link>
          <Link href="/">
            <Image src={"/images/cio.png"} className="w-[160px] sm:w-auto" alt="" width={300} height={300} />
          </Link>
        </div>
      </Container>
    </Section>
  )
}

export default LearnerReview
