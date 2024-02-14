import { FadeIn } from "@/components/ui/FadeIn"
import { GridPattern } from "@/components/ui/GridPattern"
import Hero from "./homepagesections/Hero"

export default function Home() {
  return (
    <FadeIn>
      <GridPattern
        className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-[#f4f9ffc7] stroke-neutral-950/5 text-black"
        yOffset={26}
        interactive
      />

      <Hero />
    </FadeIn>
  )
}
