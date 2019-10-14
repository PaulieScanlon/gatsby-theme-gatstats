import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

export const Seo = ({ title, excerpt, tags, lang, meta }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      //TODO better tab title
      titleTemplate={`%s | ${title}`}
      //   meta={[
      //     {
      //       name: "description",
      //       content: description,
      //     },
      //     {
      //       property: "og:title",
      //       content: title,
      //     },
      //     {
      //       property: "og:description",
      //       content: description,
      //     },
      //     {
      //       property: "og:type",
      //       content: "website",
      //     },
      //     {
      //       name: "twitter:card",
      //       content: "summary",
      //     },
      //     {
      //       name: "twitter:creator",
      //       content: title,
      //     },
      //     {
      //       name: "twitter:title",
      //       content: title,
      //     },
      //     {
      //       name: "twitter:description",
      //       content: description,
      //     },
      //   ]
      //     .concat(
      //       tags.length > 0
      //         ? {
      //             name: "keywords",
      //             content: tags.join(", "),
      //           }
      //         : []
      //     )
      //     .concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: "en",
  //   meta: [],
  tags: [],
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  //   meta: PropTypes.array,
}
