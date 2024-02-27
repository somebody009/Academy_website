import { useId } from "react"
import { ChipwithLink } from "@/components/ui/ChipWithLink"
import { Container } from "@/components/ui/Container"
import { trendingPrograms } from "@/constants"
import { TrendingIcon } from "@/constants/icons"

const TrendingPrograms = () => {
  const id = useId()
  return (
    <Container className="px-4 md:p-0">
      <h2 className="h5 mt-6 text-center !font-medium">Trending Programs</h2>
      <div className="mx-auto mt-4 flex max-w-3xl flex-wrap justify-center gap-2 md:mt-8 md:gap-6 2xl:max-w-4xl">
        {trendingPrograms.map((item) => {
          return (
            <ChipwithLink
              key={`${id}-${item.name}`}
              href={item.route}
              variant={"outline"}
              className="small-regular md:base-regular border-border bg-[#ffffff] px-6 py-0.5 !shadow-none transition duration-300 ease-in-out hover:scale-110"
              icon={<TrendingIcon title="Trending" altText="Trending" height={18} width={18} color={item.color} />}
            >
              <h3 className="!font-satoshi">{item.name}</h3>
            </ChipwithLink>
          )
        })}
      </div>
    </Container>
  )
}

export default TrendingPrograms
