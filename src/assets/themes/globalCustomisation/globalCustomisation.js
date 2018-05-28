let globalCustomisation = {

    typography: {
        display3: {
            fontWeight: 500,
            textAlign: 'center'
        }
    },
    palette: {
        primary: {
            main: '#00A2A2'
        },
        secondary: {
            main: '#d3207f'
        },
        grey: {
            main: '#e3e3e3',
            light: 'fff',
            dark: '#A4A4A4'
        },
        darkGrey: {
            main: '#363636',
            light: '#656565',
            dark: '#202020'
        }
    },
    overrides: {
        MuiPaper: { // Name of the component ⚛️ / style shee
            root: { // Name of the rule
                width: '100%',
                backgroundColor: 'none',
                position: 'relative'
            }
        },
        MuiCard: {
            root: {
                position:'relative',
                display: 'flex',
                width: '95%',
                margin:'20px auto',
                // [theme.breakpoints.down( 'sm' )]: {flexDirection: 'column'}
            }

        },
        MuiCardContent: {
            root: {
                textAlign: 'left',
            }

        },
        MuiTypography: {
            body1: {
                textAlign: 'left',
                marginBottom: '30px',
                opacity: 0.8
            },
            headline: {
                opacity: 0.6,
                fontWeight: 500,
                textAlign:'left'
            }
        },
        MuiListItemIcon: {
            root: {
                color: 'none'
            }
        },
        MuiButton: {
            root: {
                textTransform: 'capitalize',
                textDecoration: 'none',
                height: 50,
                minWidth: 'initial'
            }
        },
        MuiTabs: {
            flexContainer: {
                marginBottom: '0px'
            }
        }
    }

}

export default globalCustomisation