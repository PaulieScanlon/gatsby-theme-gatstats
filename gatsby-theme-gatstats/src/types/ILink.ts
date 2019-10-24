export type TSlug = string
export type TIcon = string
export type TTitle = string

export interface ILinkProps {
  isCurrent: string
  isPartiallyCurrent: string
  href: string
  location?: string
}

export interface ILink {
  slug: TSlug
  icon: TIcon
  title: TTitle
}
