import Link from "next/link"
import React, { useId } from "react"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { skillupCourses } from "@/constants"
import { DurationIcon } from "@/constants/icons"

function SkillupCourses() {
  const id = useId()
  const colors = ["#ff9933", "#f52b02", "#00d1b9", "#b200f2", "#3977D4"]

  return (
    <Section>
      <Container>
        <h2 className="h4 my-2 text-center !font-medium text-black">Upskill yourself with our free courses</h2>
        <div className="bg-white  bg-grid-black/[0.05] sm:p-1">
          <div className="mx-auto flex w-full max-w-7xl flex-row flex-wrap items-center justify-center gap-4 overflow-hidden rounded-md p-4 py-8 sm:gap-8 ">
            {skillupCourses.map((item, index) => {
              const colorIndex = index % colors.length
              const bgColor = colors[colorIndex]
              return (
                <Link href={item.course_Link} className="w-full sm:w-[320px]" key={`${id}-${item.course_Name}`}>
                  <Card className={`border-2 p-6 pr-0 `}>
                    <div className="relative pr-6">
                      <h6 className="body-medium relative mb-6 h-12  max-w-[250px] justify-center self-center  !font-medium ">
                        {item.course_Name}
                      </h6>
                      <div
                        className={`absolute left-[-1.53rem] top-0 h-full w-2 `}
                        style={{ backgroundColor: bgColor }}
                      ></div>
                    </div>{" "}
                    <hr />
                    <div className="mt-6 flex flex-row gap-2 !pl-0">
                      <DurationIcon />
                      <p className="small-regular self-center">{item.course_Duration}</p>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default SkillupCourses
