module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require("@tailwindcss/typography")
  ],
  daisyui: {
    styled: true,
    // TODO: Theme needs works
    themes: [
      {
        'solana': { 
          fontFamily: {
            display: ['PT Mono, monospace'],
            body: ['Inter, sans-serif'],
          },
          'primary': '#6B705C',           /* Primary color - a muted green */
          'primary-focus': '#2C5F2D',     /* Primary color - focused, a dark green */
          'primary-content': '#ffffff',   /* Foreground content color to use on primary color */

          'secondary': '#E9C46A',         /* Secondary color - a warm yellow */
          'secondary-focus': '#F4A261',   /* Secondary color - focused, a warm orange */
          'secondary-content': '#ffffff', /* Foreground content color to use on secondary color */

          'accent': '#E76F51',            /* Accent color - a vibrant red */
          'accent-focus': '#E63946',      /* Accent color - focused, a dark red */
          'accent-content': '#ffffff',    /* Foreground content color to use on accent color */

          'neutral': '#264653',           /* Neutral color - a dark blue */
          'neutral-focus': '#1D3557',     /* Neutral color - focused, a darker blue */
          'neutral-content': '#ffffff',   /* Foreground content color to use on neutral color */

          'base-100': '#F1FAEE',          /* Base color of page, used for blank backgrounds, a light off-white */
          'base-200': '#A8DADC',          /* Base color, a little darker, a light blue */
          'base-300': '#457B9D',          /* Base color, even more darker, a medium blue */
          'base-content': '#1D3557',      /* Foreground content color to use on base color, a dark blue */

          'info': '#1D3557',              /* Info, a dark blue */
          'success': '#2C5F2D',           /* Success, a dark green */
          'warning': '#E76F51',           /* Warning, a vibrant red */
          'error': '#E63946',             /* Error, a dark red */             /* Error */
        },
      },
      // backup themes:
      // 'dark',
      // 'synthwave'
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}