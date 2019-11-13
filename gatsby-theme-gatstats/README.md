## 🚀 Getting started

GatStats is a dashboard for your tech blog. Data Viz graphs are created based on frontmatter found in `src/posts/[name].mdx`. Key metrics are pulled from date / day published and tags used.

### Install

```
npm install @pauliescanlon/gatsby-theme-gatstats
```

### Preview 👁️

- [Live Demo](https://gatsby-theme-gatstats.netlify.com/)
- [Storybook](https://gatsby-theme-gatstats.netlify.com/storybook/)

**Develop**

To see the output of the theme clone the repo and start the demo app up.

```
yarn develop
```

To preview and develop componets/features run storybook.

```
yarn storybook
```

To preview the build serve the static files.

```
yarn serve
```

**Helpers**

Occasionally you'll need to clear the Gatsby cache.

```
yarn clean
```

**Build**

To see a build version of the demo app. This also builds a static version Storybook and outputs it to demo `public` folder.

```
yarn build
```

**Publish**

To publish the package run

```
yarn release
```

which also copies the README from the root into `gatsby-theme-gatstats`. At the prompt enter the package version

**Yarn Workspaces**
There are x2 workspaces `demo` and `@pauliescanlon/gatsby-theme-gatstats` the dir in the repo is just called `gatsby-theme-gatstats` confusingly!
