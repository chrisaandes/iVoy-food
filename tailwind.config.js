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
        height: {
          '70': '15.7rem',
          '75': '18.75rem',
          '80': '20rem',
          '90': '22.5rem',
          '100': '25rem'
        }
      }
    },
    variants: {
      opacity: ['responsive', 'hover', 'focus', 'disabled']
    }
  }