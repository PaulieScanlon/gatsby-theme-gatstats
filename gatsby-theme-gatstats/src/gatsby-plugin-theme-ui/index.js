import { lighten } from "@theme-ui/color"

const headings = {
  color: "text",
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "normal",
  margin: 0,
}

export default {
  space: [0, 4, 8, 16, 32, 48, 64, 128, 256, 512],

  borderWidths: [1, 2, 3],

  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 76],

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },

  initialColorMode: "dark",

  colors: {
    primary: "#e963d7",
    secondary: "#ffbf83",
    tertiary: "#4e3aef",
    text: "#ffffff",
    background: "#1b1c3b",

    modes: {
      light: {
        primary: "#e963d7",
        secondary: "#ffbf83",
        tertiary: "#4e3aef",
        text: "#000037",
        background: "#f7f7f7",
      },
    },
  },

  breakpoints: ["576px", "768px", "992px", "1200px"],

  shadows: [
    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  ],

  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },

    Layout: {
      position: "relative",
      color: "text",
      bg: "background",
    },

    Container: {
      padding: 3,
    },

    h1: {
      ...headings,
      marginBottom: 3,
      fontSize: 8,
    },

    h2: {
      ...headings,
      marginBottom: 3,
      fontSize: 7,
    },

    h3: {
      ...headings,
      marginBottom: 3,
      fontSize: 6,
    },

    h4: {
      ...headings,
      marginBottom: 3,
      fontSize: 5,
    },

    h5: {
      ...headings,
      marginBottom: 3,
      fontSize: 4,
    },

    h6: {
      ...headings,
      marginBottom: 3,
      fontSize: 2,
    },

    p: {
      color: "text",
      fontFamily: "body",
      fontSize: 2,
      fontWeight: "body",
      lineHeight: "body",
      marginTop: 0,
      marginBottom: 4,
      a: {
        color: "primary",
      },
    },

    ul: { paddingLeft: 3 },

    ol: { paddingLeft: 3 },

    li: {
      color: "text",
      marginBottom: 3,
    },

    a: {
      color: lighten("background", 0.5),
      transition: ".2s linear all",
      ":hover": {
        color: "text",
      },
    },

    pre: {
      bg: lighten("background", 0.04),
      fontFamily: "monospace",
      fontSize: 0,
      px: 3,
      py: 3,
      borderStyle: "solid",
      borderWidth: 0,
      borderColor: lighten("background", 0.5),
    },

    code: {
      fontFamily: "monospace",
      fontSize: 0,
    },

    blockquote: {
      bg: lighten("background", 0.04),
      borderLeftStyle: "solid",
      borderLeftWidth: 4,
      borderColor: "tertiary",
      px: 3,
      py: 3,
      my: 3,
      mx: [2, 3],
    },

    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },

    tr: {},

    th: {
      bg: lighten("background", 0.04),
      borderStyle: "solid",
      borderWidth: 0,
      borderColor: lighten("background", 0.5),
      px: 2,
      py: 2,
    },

    td: {
      borderStyle: "solid",
      borderWidth: 0,
      borderColor: lighten("background", 0.5),
      px: 2,
      py: 2,
    },
  },
}
