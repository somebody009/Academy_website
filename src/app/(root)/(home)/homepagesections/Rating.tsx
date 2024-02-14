"use client"
import Image from "next/image"
import React from "react"
import { Container } from "@/components/ui/Container"
import { cn } from "@/lib/utils"

const RatingCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(" rounded-lg border bg-[#fff] px-4 py-4 text-card-foreground shadow-sm md:px-6", className)}
      {...props}
    />
  )
)
RatingCard.displayName = "RatingCard"

const ratingName = [
  {
    companylogo: "/ratings/google-logo.svg",
    companyName: "Google Reviews",
    ratings: "Rated 4.8",
  },
  {
    companylogo: "/ratings/trust-pilot.svg",
    companyName: "Trustpilot Reviews",
    ratings: "Rated 4.6",
  },
  {
    companylogo: "/ratings/just-dial.svg",
    companyName: "Justdial Reviews",
    ratings: "Rated 4.8",
  },
]

const Rating = () => {
  return (
    <Container>
      <div className="bg-gradient-to-b from-transparent via-green-300 to-green-300 md:p-4 ">
        <div className="flex flex-row flex-wrap justify-center gap-3 md:flex-row md:gap-6">
          {ratingName.map((item) => {
            return (
              <>
                <RatingCard className="flex flex-row flex-wrap items-center gap-2 justify-self-center">
                  <div className="">
                    {" "}
                    <Image
                      key={item.companyName}
                      src={item.companylogo}
                      width={50}
                      height={50}
                      alt={item.companyName}
                      className=" size-8 md:w-auto"
                    />
                  </div>

                  <div className="">
                    <p className="tiny-regular md:base-regular">{item.companyName}</p>
                    <p className="h6 md:h5 font-semibold"> {item.ratings}</p>
                  </div>
                </RatingCard>
              </>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export default Rating
