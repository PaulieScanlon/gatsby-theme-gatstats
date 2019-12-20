<a href="https://gatsby-theme-gatstats.netlify.com/" target="_blank">
<img src="https://gatsby-theme-gatstats.netlify.com/images/gatstats-open-graph-image.jpg" alt="gatsby-theme-gatstats main image" />
</a>

<div>

![npm (scoped)](https://img.shields.io/npm/v/@pauliescanlon/gatsby-theme-gatstats?style=flat-square)

![npm](https://img.shields.io/npm/dt/@pauliescanlon/gatsby-theme-gatstats?style=flat-square)

![NPM](https://img.shields.io/npm/l/@pauliescanlon/gatsby-theme-gatstats?style=flat-square)

[![Netlify Status](https://api.netlify.com/api/v1/badges/675dda28-97f6-471c-9418-ae8357e30fcd/deploy-status)](https://app.netlify.com/sites/gatsby-theme-gatstats/deploys)

</div>

## GatStats is a dashboard for your tech blog.

##### ... or a dashblog if you prefer? 🤷‍♂️

Properties sourced from frontmatter in `src/posts/[name].mdx` are used to create data visualisations to wow your readers.

## 👁️ Preview

- [Live Demo](https://gatsby-theme-gatstats.netlify.com/)
- [Storybook](https://gatsby-theme-gatstats.netlify.com/storybook/)

## 🚀 Getting started

### Install

```
npm install @pauliescanlon/gatsby-theme-gatstats
```

## Setup

### gatsby-config.js

Add the `siteMetaData` and `@pauliescanlon/gatsby-theme-gatstats` to your `gatsby-config.js`

```
module.exports = {
  siteMetadata: {
    title: "Your blog title",
    description: "I like tech",
    keywords: ["tech", "blog", "boop"],
    siteUrl: 'https://gatsby-theme-gatstats.netlify.com/'
    siteImage: 'name-of-open-graphy-image.jpg' // pop an image in the static folder to use it as og:image
    config: {
      headerHeight: 64,
      sideBarWidth: 240,
      twitter: 'pauliescanlon' // no need to include the @
      github: 'pauliescanlon'
    },
  },
  plugins: ['@pauliescanlon/gatsby-theme-gatstats']
}
```

### directory structure

If you'd like to add more pages or posts add them to your src dir. **At least 1 post with a featured image is reqiured in the `posts` dir**

<!-- prettier-ignore -->
```
|-- src
    |-- pages
        |-- about.mdx
    |-- posts
        |-- year-post-dir
            |-- some-post-dir
                |-- some-post.mdx
                |-- some-image.jpg
```

### frontmatter setup

For **pages** use the following template

```
---
title: About
icon: 'M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
---

# Demo About

This is about from the demo

```

For **posts** use the following template

```
---
title: Some Post

tags: ["Gatsbyjs", "React"]
date: 2019-11-13
featuredImage: ./some-image.jpg
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

### 👥 Component Shadowing

You know about component shadowing right? By shadowing the `filePath/fileName` you can replace any component in the theme with your own.

Once such component might be `src/components/Code/Code.tsx` this file is in charge of formatting code snippets. For the time being the only way to format the colours used in code snippets is to change the theme used by `prism-react-renderer`

If you need to re-style the code snippets shadow this component and change the bits you need. Here's the soure

##### src/components/Code/Code.tsx

```js
import * as React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import './styles.css'

export const Code = ({ codeString, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true} theme={theme as any}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  }
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme as any}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

```

##### src/components/Code/styles.css

```css
.gatsby-highlight {
  position: relative;
  -webkit-overflow-scrolling: touch;
}
.gatsby-highlight pre[class*='language-'] {
  -webkit-overflow-scrolling: touch;
  padding: 1rem 0.75rem;
  border-radius: 0.25rem;
}
.gatsby-highlight pre[class*='language-']::before {
  background: black;
  border-radius: 0 0 0.25rem 0.25rem;
  color: white;
  font-size: 12px;
  letter-spacing: 0.025rem;
  padding: 0.1rem 0.5rem;
  position: absolute;
  right: 1rem;
  text-align: right;
  text-transform: uppercase;
  top: 0;
}
.gatsby-highlight pre[class~='language-javascript']::before {
  content: 'js';
  background: #f7df1e;
  color: black;
}
.gatsby-highlight pre[class~='language-js']::before {
  content: 'js';
  background: #f7df1e;
  color: black;
}

.gatsby-highlight pre[class~='language-html']::before {
  content: 'html';
  background: #005a9c;
  color: white;
}

.gatsby-highlight pre[class~='language-css']::before {
  content: 'css';
  background: #ff9800;
  color: white;
}
```

### 🖼️ Embedding Images

Embedding images into `.mdx` can be tricky but using `MdxRenderer` we can still use `frontmatter` to pass graphQL image data to any part of the post body

### frontmatter

Add locally sourced images to frontmatter using `embeddedImages` and import the `EmbeddedImage` component from the theme.

Then use it to reference an image from `embeddedImages`. There's a couple of optional helper props for `width` and `justifyContent` so you get a bit more control over sizd and alignment.

```
---
embeddedImages:
  - './image1.jpg'
  - './image2.jpg'
---

import { EmbeddedImage } from '@pauliescanlon/gatsby-theme-gatstats/src/components/EmbeddedImage'


Post body text

<EmbeddedImage
  src={props.embedded.image1}
  width={['100%', '75%', '50%', '25%']}
/>

More post body text

<EmbeddedImage
  src={props.embedded.image2}
  width="25%"
  justifyContent="center"
/>

```
