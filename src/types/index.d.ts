export interface NavigationHome {
  route: string
  label: string
  imgUrl?: string
}

export interface TrendingPrograms {
  name: string
  route: string
  color?: string
}

export interface HiringCompanies {
  src: Url
  alt: string
  title?: string
}
export interface IndustryExperts {
  trainer_Image: Url
  trainer_Name: string
  trainer_Designation: string
  trainer_linkinUrl: string
  className?: string
}
export interface OurProgramCardProps {
  className?: string
  program_Name: string
  program_description: string
  program_link: string
  icons?: JSX.Element
  hoverColor: string | undefined
  animate?: boolean
}

export interface LearnersReview {
  learner_Name: string
  learner_Position?: string
  learner_Image: string
  learner_review: string
  className?: string
}
