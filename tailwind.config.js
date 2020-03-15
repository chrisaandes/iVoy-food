module.exports = {
    important: true,
    theme: {
      fontFamily: {
        display: ['Gilroy', 'sans-serif'],
        body: ['Graphik', 'sans-serif'],
      },
      extend: {
        colors: {
          cyan: '#9cdbff',
          primary: "#9254a0",
          secondary: "#5886db",
          tertiary: "#00a2e2"

        },
        margin: {
          '96': '24rem',
          '128': '32rem',
        },
      }
    },
    variants: {
      opacity: ['responsive', 'hover', 'focus', 'disabled']
    }
  }