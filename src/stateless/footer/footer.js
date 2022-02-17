import React from 'react'
import Typography from '@material-ui/core/Typography'
import classes from './footer.css'
import SecondaryLinks from '../secondaryLinks/secondaryLinks'

const footer = ( props ) => {
    return (
        <footer className={classes.footer}>
            <div className={classes.column}>
                {/* <Typography variant='subheading'><a href="tel:+44 7490 696 991">+44 7702 527 139</a> </Typography> */}

                <Typography style={{marginBottom: '20px'}} variant='subheading'> <a href="mailto:admin@kad.tech">admin@kad.tech</a></Typography>
                <Typography style={{marginBottom: '20px', color: "rgba(255,255,255,0.5"}} variant='subheading'> Copyright 2022 - KaD.tech Studio - All rights reserved</Typography>
         
            </div>
        </footer>
    )
}

export default footer
