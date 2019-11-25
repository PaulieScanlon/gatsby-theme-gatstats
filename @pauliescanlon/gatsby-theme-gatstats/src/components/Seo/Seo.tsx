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
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          property: 'og:image',
          content: `${siteURL}/${image ? image : ''}`
        },
        {
          property: 'og:url',
          content: siteURL
        },
        {
          property: 'og:title',
          content: formatTitleTemplate
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:site',
          content: siteURL
        },
        {
          name: 'twitter:creator',
          content: siteURL
        },
        {
          name: 'twitter:title',
          content: formatTitleTemplate
        },
        {
          name: 'twitter:description',
          content: description
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', ')
              }
            : []
        )
        .concat(meta)}
    />
  )
}
