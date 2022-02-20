let themeCustomisation = {

    typography: {
        display3: {
            fontWeight: 500,
            textAlign: 'center'
        }
    },
    palette: {
        primary: {
            main: '#e1675a'
        },
        secondary: {
            main: '#D9004A'
        },
        grey: {
            main: '#E9E9E9',
            light: 'fff',
            dark: '#A4A4A4'
        }
    },
    overrides: {
        MuiPaper: { // Name of the component ⚛️ / style shee
          root: { // Name of the rule
            width: '100%',
            backgroundColor: 'none',
            position:'relative'
          }
        }
      }

}

export default themeCustomisation