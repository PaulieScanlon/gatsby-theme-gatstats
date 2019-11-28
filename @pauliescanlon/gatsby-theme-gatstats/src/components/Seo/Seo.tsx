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
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={formatTitleTemplate}
    >
      <meta
        data-react-helmet="true"
        property="og:title"
        content={formatTitleTemplate}
      />
      <meta data-react-helmet="true" property="og:url" content={siteURL} />
      <meta
        data-react-helmet="true"
        property="og:description"
        content={description}
      />
      <meta
        data-react-helmet="true"
        property="og:image"
        content={`${siteURL}/${image ? image : ''}`}
      />
      <meta data-react-helmet="true" property="og:type" content="website" />
      <meta
        data-react-helmet="true"
        property="og:image:alt"
        content={description}
      />
      <meta
        data-react-helmet="true"
        name="twitter:card"
        content={`${siteURL}/${image ? image : ''}`}
      />
      <meta
        data-react-helmet="true"
        name="twitter:title"
        content={formatTitleTemplate}
      />
      <meta data-react-helmet="true" name="twitter:url" content={siteURL} />
      <meta
        data-react-helmet="true"
        name="twitter:description"
        content={description}
      />
      <meta
        data-react-helmet="true"
        name="twitter:image"
        content={`${siteURL}/${image ? image : ''}`}
      />
      <meta
        data-react-helmet="true"
        name="twitter:image:alt"
        content={description}
      ></meta>

      <meta
        data-react-helmet="true"
        name="twitter:creator"
        content={siteURL}
      ></meta>
      <meta
        data-react-helmet="true"
        name="gatsby-theme"
        content="@pauliescanlon/gatsby-theme-gatstats"
      />
      <meta
        data-react-helmet="true"
        name="keywords"
        content={keywords.join(', ')}
      />
    </Helmet>
  )
}
