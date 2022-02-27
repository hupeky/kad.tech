import React from 'react'

import Button from '../../UI/Button/Button'

import Hidden from '@material-ui/core/Hidden'
import logo from "../../assets/imgs/kadtech-logo.png"

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
// import ThreeDRotation from '@material-ui/icons/ThreeDRotation'

import SecondaryLinks from '../secondaryLinks/secondaryLinks'
import DemoIcon from '../../assets/icons/demo'

const navBar = ( props ) => {
    return (

        <AppBar style={{background: "rgb(45, 45,45)"}} position="sticky" color="inherit" elevation={10}>
            <Toolbar>
                <Hidden only={['md', 'lg', 'xl']}>
                    <IconButton onClick={props.toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <img src={logo} style={{height: "50px", width: "auto", marginLeft: "auto" }}/>
                </Hidden>
                <Hidden only={['xs', 'sm']}>
                    <Button  click={() => props.scrollButton( document.body )}  >
                        <img src={logo} style={{height: "50px", width: "auto"}}/>
                    </Button>
                    {props.pageBlockData.map( ( pageBlock, i ) => {
                        if (pageBlock.label) {
                            return (
                                <Button bg={false} click={() => props.scrollButton( pageBlock.ref )} key={i} >
                                    {pageBlock.label}
                                </Button>
                            )
                        }

                    } )}
                </Hidden>
                {/* <SecondaryLinks  align='right' /> */}
            </Toolbar>
        </AppBar>


    )
}

export default navBar
