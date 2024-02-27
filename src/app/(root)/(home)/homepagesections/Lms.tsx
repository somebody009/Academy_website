import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

const Lms = () => {
  return (
    <Section className="bg-white">
      {" "}
      <Container className="  p-6 !opacity-100 ">
        <h2 className="h4 text-center !font-medium text-black">Get immersive learning experience</h2>
        <p className="mx-auto text-center md:max-w-5xl 3xl:max-w-6xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Image
          className="mx-auto w-auto py-8"
          src={"/images/LMS1.png"}
          width={1000}
          height={1000}
          alt="DataSpace Learning Management System"
        />
      </Container>
    </Section>
  )
}

export default Lms
