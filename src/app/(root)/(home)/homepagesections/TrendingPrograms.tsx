import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/ui/Container"
import { trendingPrograms } from "@/constants"
import { TrendingIcon } from "@/constants/icons"

const TrendingPrograms = () => {
  return (
    <Container>
      <h5 className="h5 mt-6 text-center">Trending Programs</h5>
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-6 2xl:max-w-4xl">
        {trendingPrograms.map((item) => {
          return (
            <Badge
              key={item.name}
              asLink
              href={item.route}
              variant={"outline"}
              className="small-regular  md:base-regular border-border bg-[#ffffff] !shadow-none"
              icon={<TrendingIcon title="Trending" altText="Trending" height={18} width={18} color={item.color} />}
            >
              {item.name}
            </Badge>
          )
        })}
      </div>
    </Container>
  )
}

export default TrendingPrograms
