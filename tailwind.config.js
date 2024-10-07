module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      screens: {
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
      }, 
      spacing: {
        "super":"55rem",
        "extra": "50rem",
        "big": "44rem"
      },
      fontSize: {
        "super": "8rem",
        "big": "6rem",
        "medium": "5rem"
      }
    },
    fontFamily: {
      poppins:['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

