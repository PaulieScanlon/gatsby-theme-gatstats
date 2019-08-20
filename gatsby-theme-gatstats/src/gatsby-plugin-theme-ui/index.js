const headings = {
  color: "text",
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "normal",
  margin: 0,
}

export default {
  space: [0, 4, 8, 16, 32, 48, 64, 128, 256, 512],

  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],

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
    mutedText: "#6e6eae",
    mutedLight: "#212241",
    background: "#1b1c3b",

    modes: {
      light: {
        primary: "#e963d7",
        secondary: "#ffbf83",
        tertiary: "#4e3aef",
        text: "#000037",
        mutedText: "#a8a8bb",
        mutedLight: "#ffffff",
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
      fontSize: 7,
    },

    h2: {
      ...headings,
      marginBottom: 3,
      fontSize: 6,
    },

    h3: {
      ...headings,
      marginBottom: 3,
      fontSize: 4,
    },

    h4: {
      ...headings,
      marginBottom: 3,
      fontSize: 4,
    },

    h5: {
      ...headings,
      marginBottom: 1,
      fontWeight: "body",
      fontSize: 1,
      color: "secondary",
    },

    h6: {
      ...headings,
      marginBottom: 1,
      fontWeight: "body",
      fontSize: 1,
      color: "text",
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

    ul: {
      paddingLeft: 20,
      margin: 0,
    },

    ol: {
      paddingLeft: 20,
      margin: 0,
    },

    li: {
      color: "text",
      marginBottom: 3,
    },

    a: {
      color: "mutedText",
      transition: ".2s linear all",
      ":hover": {
        color: "text",
      },
    },

    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },

    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },

    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },

    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },

    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
}
