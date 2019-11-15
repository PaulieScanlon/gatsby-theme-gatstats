const headings = {
  color: 'text',
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'normal',
  wordBreak: 'break-word',
  margin: 0
}

export default {
  space: [0, 4, 8, 16, 24, 32, 48, 64],

  radii: [4, 8, 50],

  borderWidths: [1, 2, 3],

  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace'
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64],

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },

  initialColorModeName: 'dark',

  colors: {
    text: '#ffffff',
    textSecondary: '#d2d2f1',
    textMuted: '#4e4c7a',

    primary: '#a92aeb',
    secondary: '#688ce0',

    surface: '#1a1832',
    background: '#131127',

    transparent: `rgba(0,0,0,0)`,

    modes: {
      light: {
        text: '#304250',
        textSecondary: '#688796',
        textMuted: '#90b4c5',

        primary: '#ff94c2',
        secondary: '#90caf9',

        surface: '#fdfafe',
        background: '#fcf2ff',

        transparent: `rgba(0,0,0,0)`
      }
    }
  },

  breakpoints: ['576px', '768px', '992px', '1200px'],

  transitions: {
    sideBarTransition: '.3s ease-in-out margin-left'
  },

  shadows: [
    `0 0 0 2px`,
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.20)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.19)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.19)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.18)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.17)'
  ],

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'normal'
    },

    h1: {
      ...headings,
      marginBottom: 3,
      fontSize: [6, 7, 8]
    },

    h2: {
      ...headings,
      marginBottom: 3,
      fontSize: [5, 7]
    },

    h3: {
      ...headings,
      marginBottom: 3,
      fontSize: [4, 6]
    },

    h4: {
      ...headings,
      marginBottom: 3,
      fontSize: [4, 5]
    },

    h5: {
      ...headings,
      marginBottom: 2,
      fontSize: [3, 4]
    },

    h6: {
      ...headings,
      marginBottom: 2,
      fontSize: [2, 3],
      fontWeight: 'body'
    },

    p: {
      color: 'textSecondary',
      fontFamily: 'body',
      fontSize: [1, 2],
      fontWeight: 'body',
      lineHeight: 'normal',
      wordBreak: 'break-word',
      marginTop: 0,
      marginBottom: 4
    },

    ul: { color: 'text', fontFamily: 'body', fontSize: [1, 2], paddingLeft: 3 },

    ol: { color: 'text', fontFamily: 'body', fontSize: [1, 2], paddingLeft: 3 },

    li: {
      color: 'text',
      fontFamily: 'body',
      fontSize: [1, 2],
      marginBottom: 3
    },

    a: {
      color: 'primary',
      cursor: 'pointer',
      fontSize: [1, 2],
      outline: 'none',
      transition: '.2s linear all',
      ':hover': {
        color: 'text'
      },
      ':focus': {
        color: 'text'
      }
    },

    pre: {
      backgroundColor: 'background',
      fontFamily: 'monospace',
      fontSize: 0,
      px: 3,
      py: 3,
      borderStyle: 'solid',
      borderWidth: 0,
      borderColor: 'background'
    },

    code: {
      fontFamily: 'monospace',
      fontSize: 0
    },

    blockquote: {
      backgroundColor: 'background',
      borderLeftStyle: 'solid',
      borderLeftWidth: 4,
      borderColor: 'secondary',
      px: 3,
      py: 3,
      my: 3,
      mx: [2, 3]
    },

    table: {
      color: 'textSecondary',
      fontFamily: 'body',
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },

    tr: {},

    th: {
      backgroundColor: 'background',
      color: 'text',
      borderTopColor: 'textSecondary',
      borderLeftColor: 'textSecondary',
      borderBottomColor: 'transparent',
      borderRightColor: 'textSecondary',
      borderStyle: 'solid',
      borderWidth: 0,
      px: 2,
      py: 2
    },

    td: {
      borderStyle: 'solid',
      borderWidth: 0,
      borderColor: 'textSecondary',
      px: 2,
      py: 2
    },

    hr: {
      opacity: 0
    }
  }
}
