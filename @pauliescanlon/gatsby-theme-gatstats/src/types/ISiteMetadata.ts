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
  title?: ''
  /** Description used for SEO */
  description?: ''
  /** Tags used for SEO */
  keywords?: []
  /** ISiteMetaConfig */
  config: ISiteMetaConfig
}
