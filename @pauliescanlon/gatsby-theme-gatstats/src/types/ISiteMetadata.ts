interface ISiteMetaConfig {
  /** The height of the header */
  headerHeight?: number
  /** The width of the SideBar */
  sideBarWidth?: number
  /** Twitter URL */
  twitter?: string
  /** Github URL */
  github?: string
}

export interface ISiteMetadata {
  /** Title to use for SEO */
  title?: string
  /** Description used for SEO */
  description?: string
  /** Tags used for SEO */
  keywords?: []
  /** The URL of the site */
  siteURL?: string
  /** ISiteMetaConfig */
  config?: ISiteMetaConfig
}
