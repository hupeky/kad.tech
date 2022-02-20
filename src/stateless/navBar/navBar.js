import React from 'react'

import Button from '../../UI/Button/Button'

import Hidden from '@material-ui/core/Hidden'

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
                </Hidden>
                <Hidden only={['xs', 'sm']}>
                    <Button spacer="true" click={() => props.scrollButton( document.body )} label={'Home'} >
                        <DemoIcon height={25} />

                    </Button>
                    {props.pageBlockData.map( ( pageBlock, i ) => {
                        return (
                            <Button bg={false} click={() => props.scrollButton( pageBlock.ref )} key={i} >
                                {pageBlock.label}
                            </Button>
                        )
                    } )}
                </Hidden>
                <SecondaryLinks  align='right' />
            </Toolbar>
        </AppBar>


    )
}

export default navBar
