<p align="center">
  <a href="https://github.com/jlengstorf/gatsby-theme-jam-example">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Forked from Gatsby Theme Jam Submission Example
</h1>

## 🚀 Getting started

1.  **Preview.**

To see the output of the theme start the demo app up

    ```sh
     cd gatsby-theme-gatstats/
    yarn workspace demo develop
    ```

1-1. **Start developing.**

    Occasional you'll need to clear the Gatsby cache

    ```sh
    cd gatsby-theme-gatstats/demo
    rm -r .cache
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── public
    ├── static
    ├── src
        ├── pages
            ├── about.mdx
            ├── contact.mdx
            ├── randome_things.mdx
        ├── posts
            ├── 2018-11-23-random_name
              ├── post-2.mdx

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/public`**: ...

3.  **`/static`**: ...

4.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

5.  **`/src/pages`**: This directory will contain top level pages that appear in the side bar nav.
    The _frontmatter_ here contains two keys `title` and `icon` ... link to icon stuff here

6.  **`/src/posts`**: This directory will contain sub directories and `.mdx` that are used to display posts. The dir name and file name are what is used in the url.
    The _frontmatter_ here contains a title that is used by the post (probably keep the title and the `.mdx` name the same), a _date_ which as to be in ths format `YYYY-MM-DD`. We use this date to sort the posts in ASC order.
    an optional _featuredImage_ this might also be used in SEO meta tags..
    _tags_ ....
