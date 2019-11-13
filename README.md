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

Add `@pauliescanlon/gatsby-theme-gatstats` to your `gatsby-config`

```
module.exports = {
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-theme-gatstats`,
    },
  ],

  siteMetadata: {
    title: "Your blog title",
    description: "I like tech",
    config: {
      // this controls the width of the sidebar and is required
      sideBarWidth: 240,
    },
  },
}
```

GatStats requires you have at least an `index.mdx` in `pages` one `blog-post.mdx` in `posts` that contains a featured image.

<!-- prettier-ignore -->
```
|src
    |-- gatsby-theme-gatstats
    |-- pages
        |-- index.mdx
    |-- posts
        |-- some-post-dir
            |-- some-post.mdx
            |-- some-image.jpg
```
