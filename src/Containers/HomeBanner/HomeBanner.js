import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/actions'

// import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
 import kadtechLogo from "../../assets/imgs/kadtech-logo.png"

import AScene from '../../stateless/AScene/AScene'
import {withStyles} from '@material-ui/core/styles'

import myClasses from './HomeBanner.css'
import {Typography} from '@material-ui/core'

const drawerWidth = 400

const styles = theme => ( {
    root: {
        flexGrow: 1,
        height: '800px',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%'
    },
    maxHeightBreaks: {
        [theme.breakpoints.down( 'xs' )]: {maxHeight: '500px'},
        [theme.breakpoints.up( 'sm' )]: {maxHeight: '550px'},
        [theme.breakpoints.up( 'md' )]: {maxHeight: '600px'},
        [theme.breakpoints.up( 'xl' )]: {maxHeight: '700px'}
    },
    titleSizeBreaks: {
        [theme.breakpoints.down( 'xs' )]: {fontSize: '16px'},
        [theme.breakpoints.up( 'sm' )]: {maxHeight: '10px'},
        [theme.breakpoints.up( 'xl' )]: {maxHeight: '10px'}
    },
    heightBreaks: {
        [theme.breakpoints.down( 'xs' )]: {height: '500px'},
        [theme.breakpoints.up( 'sm' )]: {height: '550px'},
        [theme.breakpoints.up( 'md' )]: {height: '600px'},
        [theme.breakpoints.up( 'xl' )]: {height: '700px'}
    },
    navIconHide: {
        [theme.breakpoints.up( 'md' )]: {
            display: 'none'
        },
        zIndex: theme.zIndex.drawer + 10,
        position: 'absolute',
        right: '10px',
        color: 'white'
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        position: 'relative',
        backgroundColor: '#363636',
        [theme.breakpoints.up( 'xs' )]: {
            position: 'relative'
        },
        maxWidth: drawerWidth,
        overflow: 'visible',
        borderLeft: 'none'
    },
    drawerPaperTemp: {
        maxWidth: drawerWidth,
        backgroundColor: '#363636'

    },
    content: {
        flexGrow: 1,
        background: "rgba(0, 0, 0, 0.5)"
    },

    blockGreenText: {
        backgroundColor: theme.palette.primary.main,
        padding: '3px 20px',
        margin: '15px 0',
        opacity: 1
    }

} )

class HomeBanner extends Component {
    state = {
        mobileOpen: false
    }

    handleDrawerToggle = () => {
        this.setState( {mobileOpen: !this.state.mobileOpen} )
    }

    startDemoHandler = () => {
        this.props.enter3DHandler()
        this.props.startColourAnim( 'logo' )
    }


    render () {
        const {classes} = this.props
        return (

            <section className={[classes.root, classes.heightBreaks].join( " " )}>
            {this.props.enter3D ? <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.navIconHide}
                >
                    <MenuIcon />
                </IconButton> : null}

                <div className={classes.content}>
                    <AScene>
                        <div className={[myClasses.overlay, this.props.enter3D ? myClasses.removed : null].join( " " )}
                        >
                            <div className={myClasses.bg} />
                            <div className={[myClasses.contentHolder, classes.maxHeightBreaks].join( " " )}>

                                    <img style={{display: "block", borderRadius: "20px", padding: "5px", smargin: "auto", width: "60%", background: "rgba(0,0,0,0.6)", height: "auto" , maxWidth: "300px", minWidth: "220px"}} src={kadtechLogo} height={200} />
                                {/* <Typography className={[classes.titleSizeBreaks].join( " " )} style={{opacity: 0.8, marginTop: "5px"}} variant={'headline'}>3D Web Software Engineering</Typography> */}



                            </div>
                        </div>
                    </AScene>
                </div>
            </section>

        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        enter3D: state.aScene.enter3D // access the aScene reducer slice from global state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} ),
        startColourAnim: ( ref ) => dispatch( {type: actionTypes.START_COLOUR_ANIM, ref: ref} ),
        enter3DHandler: () => dispatch( {type: actionTypes.TOGGLE_ENTER_3D} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles, {withTheme: true} )( HomeBanner ) )
