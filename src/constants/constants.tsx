import { OurProgramCardProps } from "@/types"
import { BestSelling, CybersecurityIcon, Datascience, DigitalMarketing, NetworkingCloud, Programing } from "./icons"

export const ourPrograms: OurProgramCardProps[] = [
  {
    program_Name: "Best Selling",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "String",
    hoverColor: "#ff9933",
    icons: <BestSelling title="Best Selling" titleId="best-selling-title" />,
  },
  {
    program_Name: "Cyber Security",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "String",
    hoverColor: "#f52b02",
    icons: <CybersecurityIcon title="Best Selling" titleId="best-selling-title" />,
  },
  {
    program_Name: "Data Science & Analytics",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "String",
    hoverColor: "#00d1b9",
    icons: <Datascience title="Best Selling" titleId="best-selling-title" />,
  },
  {
    program_Name: "Digital Marketing",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "String",
    hoverColor: "#b200f2",
    icons: <DigitalMarketing title="Best Selling" titleId="best-selling-title" />,
  },
  {
    program_Name: "Network & Clouds Computing",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "/best-selling",
    hoverColor: "#3977D4",
    icons: <NetworkingCloud title="Best Selling" titleId="best-selling-title" />,
  },
  {
    program_Name: "Programming",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "String",
    hoverColor: "#53B44A ",
    icons: <Programing title="Best Selling" titleId="best-selling-title" />,
  },
]
