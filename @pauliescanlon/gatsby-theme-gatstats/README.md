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

If you'd like to add more pages or posts add them to your src dir. **At least 1 post with a featuredImage and embeddedImage is reqiured in the `posts` dir**

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
                |-- some-embedding-image.jpg
```

### frontmatter setup

For **pages** use the following template. The icon field is a path for any icon. This is example is from [Material Icons](https://material.io/resources/icons/?style=baseline). The icon fild is what is used to determin if an `.mdx` file is used as a navigation item or not.

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
featuredImage: some-image.jpg
embeddedImages:
  - some-embeddedImage.jpg
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

### 🖼️ Embedding Images

Embedding images into `.mdx` can be tricky but using `MdxRenderer` we can still use `frontmatter` to pass graphQL image data to any part of the post body

### frontmatter

Add locally sourced images to frontmatter using `embeddedImages` then pass a reference to them to the `<EmbeddedImage />` component via props.

The `<EmbeddedImage />` component is part of the theme and is passed to all `.mdx` files using the `MDXProvider` so you don't have to import anything for this to work.

There's a couple of optional helper props for `width` and `justifyContent` so you get a bit more control over sizd and alignment.

### EmbeddedImage

The `<EmbeddedImage />` component accepts a width prop which can be used to control the image size. The `width` prop can either be a single string which will apply the the same size across all breakpoints or an array of sizes to use across the breakpoints defined in the theme.

```
---
embeddedImages:
  - image1.jpg
  - image2.jpg
---

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

### 👥 Component Shadowing

You know about component shadowing right? By shadowing the `filePath/fileName` you can replace any component in the theme with your own.

Once such component might be `src/components/Code/Code.tsx` this file is in charge of formatting code snippets. For the time being the only way to format the colours used in code snippets is to change the theme used by `prism-react-renderer`

If you need to re-style the code snippets shadow this component and change the bits you need.

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P31B7G8)
