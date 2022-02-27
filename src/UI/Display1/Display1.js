import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ( {
    display1: {
        [theme.breakpoints.up( 'xs' )]: {fontSize: '1.2em'},
        [theme.breakpoints.up( 'sm' )]: {fontSize: '1.4em'},
        [theme.breakpoints.up( 'md' )]: {fontSize: '1.6em'},
        [theme.breakpoints.up( 'lg' )]: {fontSize: '1.9em'},
        fontWeight: 500,
        textAlign:'center',
        marginBottom:'30px',
        fontWeight: 300,
        marginTop:'30px'
    }
} )

const Display1 = ( props ) => {
    const {classes} = props
    return (

            <Typography {...props} style={{margin: props.margin}} variant={'display1'} className={classes.display1}>{props.children}</Typography>

    )
}
export default withStyles( styles, {withTheme: true} )( Display1 )
