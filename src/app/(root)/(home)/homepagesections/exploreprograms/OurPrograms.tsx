"use client"
import React, { useId, useState } from "react"
import { ChipwithLink } from "@/components/ui/ChipWithLink"
import { Container } from "@/components/ui/Container"
import { GridPattern } from "@/components/ui/GridPattern"
import { Section } from "@/components/ui/Section"
import { ourPrograms } from "@/constants/constants"
import { RightChevron } from "@/constants/icons"
import { cn } from "@/lib/utils"
import { OurProgramCardProps } from "@/types"

const OurProgramCard = React.forwardRef<HTMLDivElement, OurProgramCardProps>(
  ({ className, program_Name, program_description, program_link, icons, hoverColor }, ref) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isChipHovered, setIsChipHovered] = useState(false)
    const [isCHovered, setCIsHovered] = useState(false)

    return (
      <div
        ref={ref}
        className={cn(
          "group z-[999] w-auto max-w-[400px] flex-auto rounded-lg border-[3px] bg-card p-6  text-card-foreground opacity-100 shadow-sm transition duration-300 ease-in-out hover:scale-105  hover:border-[#0688d4] hover:shadow-xl hover:shadow-[#6a9fc2d7]   hover:transition hover:duration-300 hover:ease-in-out",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-row gap-4">
          <div className="">
            {icons && React.cloneElement(icons, { hoverColor: isHovered ? hoverColor : "#0C0C0C" })}
          </div>
          <div className="h5 self-center !font-clashgrotesk font-medium">
            <h3>{program_Name}</h3>{" "}
          </div>
        </div>
        <p className="small-regular  min-h-20">{program_description}</p>

        <ChipwithLink
          variant={"secondary"}
          className={cn(
            "flex-none !rounded-lg border-none bg-transparent fill-[#000] p-0",
            isChipHovered ? "bg-[#F1FBFF]" : ""
          )}
          href={program_link}
          onMouseEnter={() => setIsChipHovered(true)}
          onMouseLeave={() => setIsChipHovered(false)}
        >
          <div
            className={cn(
              "flex items-center gap-2 rounded-lg  fill-[#000] px-2 py-1.5",
              isChipHovered ? "bg-[#F1FBFF] text-link" : ""
            )}
            onMouseEnter={() => setCIsHovered(true)}
            onMouseLeave={() => setCIsHovered(false)}
          >
            <span>View Program</span>
            <RightChevron isChipHovered={isCHovered} />
          </div>
        </ChipwithLink>
      </div>
    )
  }
)
OurProgramCard.displayName = "OurProgramCard"

const OurPrograms = () => {
  const id = useId()

  return (
    <Section className="relative !py-0">
      <GridPattern
        className="absolute inset-0 z-[-10] size-full bg-blue-primary fill-[#00266327] stroke-[#e0e5f20a] text-black"
        yOffset={0}
        interactive
      />
      <Container className=" relative z-10 p-8 py-14">
        <h2 className="h4 my-2 text-center !font-medium text-white">Explore our programs</h2>
        <div className="mx-auto mt-4 flex flex-wrap justify-center gap-4 align-middle md:mt-8  md:gap-6 2xl:max-w-screen-2xl">
          {ourPrograms.map((item) => {
            return (
              <OurProgramCard
                key={`${id}-${item.program_Name}`}
                program_description={item.program_description}
                program_Name={item.program_Name}
                program_link={item.program_link}
                className=" hover:border-[3px]"
                hoverColor={item.hoverColor}
                icons={item.icons || undefined}
              />
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export default OurPrograms
