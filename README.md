## 📈 GatStats is a Dashboard for your tech blog.

##### ... or, a Dashblog if you prefer? 🤷‍♂️

Properties sourced from frontmatter in `src/posts/[name].mdx` are used to create data visualisations to wow your readers.

### Preview 👁️

- [Live Demo](https://gatsby-theme-gatstats.netlify.com/)
- [Storybook](https://gatsby-theme-gatstats.netlify.com/storybook/)

## 🚀 Getting started

### Install

```
npm install @pauliescanlon/gatsby-theme-gatstats
```

### Setup

#### gatsby-config.js

Add the `siteMetaData` and `@pauliescanlon/gatsby-theme-gatstats` to your `gatsby-config.js`

```
module.exports = {
  siteMetadata: {
    title: "Your blog title",
    description: "I like tech",
    keywords: ["tech", "blog", "boop"],
    config: {
      sideBarWidth: 240,
    },
  },
  plugins: ['@pauliescanlon/gatsby-theme-gatstats']
}
```

#### directory structure

If you'd like to add more pages or posts add them to your src dir. **At least 1 post with a featured image is reqiured in the `posts` dir**

<!-- prettier-ignore -->
```
|-- src
    |-- pages
        |-- about.mdx
    |-- posts
        |-- some-post-dir
            |-- some-post.mdx
            |-- some-image.jpg
```

#### frontmatter setup

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
