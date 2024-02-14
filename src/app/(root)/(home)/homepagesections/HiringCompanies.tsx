import Image from "next/image"
import React from "react"
import { Container } from "@/components/ui/Container"
import { InfiniteMoving } from "@/components/ui/InfiniteMoving"
import { hiringCompanies } from "@/constants"

const HiringCompanies = () => {
  return (
    <Container>
      <h4 className="h4 mt-16 text-center">Ignite Your Career With Top Hiring Companies</h4>
      <div className="dark:bg-grid-white/[0.05] relative flex  flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black">
        <InfiniteMoving direction="left" speed="slow">
          {hiringCompanies.map((item) => {
            return (
              <Image
                key={item.src} // Assuming src is unique
                src={item.src}
                alt={item.alt}
                title={item.title}
                width={100}
                height={100}
              />
            )
          })}
        </InfiniteMoving>
      </div>
    </Container>
  )
}

export default HiringCompanies
