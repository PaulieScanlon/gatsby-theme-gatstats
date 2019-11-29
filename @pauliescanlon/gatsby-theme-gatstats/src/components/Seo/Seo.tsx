import * as React from 'react'

import Helmet from 'react-helmet'

import { ISiteMetadata } from '../../types'

interface ISeoProps extends ISiteMetadata {
  titleTemplate?: string
  image?: string
  lang?: string
  meta?: any[]
}

export const Seo: React.FC<ISeoProps> = ({
  title,
  titleTemplate,
  description,
  siteURL,
  image,
  keywords = [],
  lang = 'eng',
  meta = []
}) => {
  const formatTitleTemplate = `${title} ${
    titleTemplate ? `| ${titleTemplate}` : ''
  }`

  return (
    <Helmet title={title} titleTemplate={formatTitleTemplate}>
      <html lang={lang} />
      <meta name="description" content={description} />
      <meta name="image" content={`${siteURL}/${image ? image : ''}`} />
      <meta
        name="gatsby-theme"
        content="@pauliescanlon/gatsby-theme-gatstats"
      />
      <meta name="keywords" content={keywords.join(', ')} />
      {/* Facebook */}
      <meta property="og:title" content={formatTitleTemplate} />
      <meta property="og:url" content={siteURL} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteURL}/${image ? image : ''}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={description} />
      {/* Twitter */}
      <meta name="twitter:card" content={`${siteURL}/${image ? image : ''}`} />
      <meta name="twitter:title" content={formatTitleTemplate} />
      <meta name="twitter:url" content={siteURL} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteURL}/${image ? image : ''}`} />
      <meta name="twitter:image:alt" content={description}></meta>
      <meta name="twitter:creator" content={siteURL}></meta>
    </Helmet>
  )
}
