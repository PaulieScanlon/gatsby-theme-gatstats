import * as React from 'react'

import Helmet from 'react-helmet'

interface ISeoProps {
  title: string
  titleTemplate?: string
  description: string
  keywords?: string[]
  image?: string
  lang?: string
  meta?: any[]
}

export const Seo: React.FC<ISeoProps> = ({
  title,
  titleTemplate,
  description,
  image,
  keywords = [],
  lang = 'eng',
  meta = []
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={titleTemplate ? `%s | ${titleTemplate}` : ''}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          property: 'og:image',
          content: image
        },
        {
          property: 'og:title',
          content: title
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
          name: 'twitter:creator',
          content: title
        },
        {
          name: 'twitter:title',
          content: title
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
