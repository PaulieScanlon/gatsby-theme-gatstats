const headings = {
  color: "text",
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "normal",
  wordBreak: "break-all",
  margin: 0,
}

export default {
  space: [0, 4, 8, 16, 32, 48, 64, 128, 256, 512],

  radii: [4, 8, 50],

  borderWidths: [1, 2, 3],

  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64],

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },

  initialColorModeName: "dark",

  colors: {
    modes: {
      light: {
        text: "#4f4e53",
        muted: "#c2c9da",
        background: "#e7e9f1",
        surface: "#ffffff",
        primary: "#0556b2",
        secondary: "#3166a1",
        shadow: " rgba(235, 237, 246, 0.5)",
      },
      dark: {
        text: "#c3cbd9",
        muted: "#4f518f",
        background: "#1b1c3b",
        surface: "#222449",
        primary: "#ec3cbd",
        secondary: "#c456d9",
        shadow: " rgba(27, 28, 59, 0.5)",
      },
    },
  },

  breakpoints: ["576px", "768px", "992px", "1200px"],

  shadows: [
    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.20)",
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.19)",
    "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.19)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.18)",
    "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.17)",
  ],

  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "normal",
    },

    Layout: {
      position: "relative",
      color: "text",
      bg: "background",
    },

    h1: {
      ...headings,
      marginBottom: 3,
      fontSize: [6, 7, 8],
    },

    h2: {
      ...headings,
      marginBottom: 3,
      fontSize: [5, 7],
    },

    h3: {
      ...headings,
      marginBottom: 3,
      fontSize: [4, 6],
    },

    h4: {
      ...headings,
      marginBottom: 3,
      fontSize: [2, 5],
    },

    h5: {
      ...headings,
      marginBottom: 2,
      fontSize: [2, 4],
    },

    h6: {
      ...headings,
      marginBottom: 2,
      fontSize: [1, 2],
      fontWeight: "body",
    },

    p: {
      color: "text",
      fontFamily: "body",
      fontSize: [1, 2],
      fontWeight: "body",
      lineHeight: "body",
      marginTop: 0,
      marginBottom: 2,
    },

    ul: { paddingLeft: 3 },

    ol: { paddingLeft: 3 },

    li: {
      color: "text",
      marginBottom: 3,
    },

    a: {
      color: "secondary",
      cursor: "pointer",
      fontSize: [1, 2],
      outline: "none",
      borderWidth: 0,
      borderStyle: "solid",
      borderColor: "surface",
      transition: ".2s linear all",
      ":hover": {
        color: "muted",
      },
      ":focus": {
        borderWidth: 0,
        borderStyle: "dashed",
        borderColor: "text",
      },
    },

    pre: {
      backgroundColor: "background",
      fontFamily: "monospace",
      fontSize: 0,
      px: 3,
      py: 3,
      borderStyle: "solid",
      borderWidth: 0,
      borderColor: "background",
    },

    code: {
      fontFamily: "monospace",
      fontSize: 0,
    },

    blockquote: {
      backgroundColor: "background",
      borderLeftStyle: "solid",
      borderLeftWidth: 4,
      borderColor: "secondary",
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
      backgroundColor: "background",
      color: "text",
      borderStyle: "solid",
      borderWidth: 0,
      borderColor: "muted",
      px: 2,
      py: 2,
    },

    td: {
      borderStyle: "solid",
      borderWidth: 0,
      borderColor: "muted",
      px: 2,
      py: 2,
    },
  },
}
