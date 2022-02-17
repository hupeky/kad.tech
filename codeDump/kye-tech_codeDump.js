// 3dcardmanager component

import React, {Component} from 'react'
import {connect} from 'react-redux'

import Card from './Card/Card'
import 'aframe'
import * as actionTypes from '../../store/actions/actions'

class CardManager extends Component {
    state = {

    }


    componentDidMount () {
         setTimeout(
             () => {
                 this.props.startColourAnim( 'megamanBG' )
                 this.props.startAnimation( {x: Math.floor( Math.random() * this.props.dimensions.x ), z: Math.floor( Math.random() * this.props.dimensions.z )} )
             }, 3000
        )
        this.intervalAnimation = setInterval(
            () => {
                if ( !this.props.enter3D )
                    this.props.startAnimation( {x: Math.floor( Math.random() * this.props.dimensions.x ), z: Math.floor( Math.random() * this.props.dimensions.z )} )
            }
            , 7000)
        
    }

    render () {
        let cardEntityArray = []
        let delay = null
        for ( let z = 0; z < this.props.dimensions.z; z++ ) {
            let row = []
            for ( let x = 0; x < this.props.dimensions.x; x++ ) {
                if ( this.props.animCoords )
                    delay = this.props.distanceLookUp[this.props.animCoords.x][this.props.animCoords.z][this.props.waveType][x][z]
                else
                    delay = null
                row.push( <Card colourInd={this.props.colourIndex} animInd={this.props.animationIndex} distance={delay} position={`${x} -0 ${-z}`} key={`${x}_${z}`} id={`${x}_${z}`} x={x} z={z} /> )
            }
            cardEntityArray.push( row )
        }
        return (
            <a-entity click={this.cardClickedHandler} position={`-${Math.floor( this.props.dimensions.x / 2 )} 0 ${Math.floor( this.props.dimensions.z / 2.3 )}`} rotation="0 0 0" >
                {cardEntityArray}
            </a-entity>

        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        enter3D: state.aScene.enter3D,
        animationIndex: state.aScene.animationIndex, // access the aScene reducer slice from global state
        dimensions: state.aScene.dimensions,
        animCoords: state.aScene.animCoords,
        waveType: state.aScene.waveType,
        waveShape: state.aScene.waveShape,
        distanceLookUp: state.aScene.distanceLookUp,

        colourIndex: state.aScene.colourIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} ),
        setDimensions: ( dimensions ) => dispatch( {type: actionTypes.SET_DIMENSIONS, dimensions: dimensions} ),
        startColourAnim: ( ref ) => dispatch( {type: actionTypes.START_COLOUR_ANIM, ref: ref} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( CardManager )

// 3d card component 

import React, {Component} from 'react'
import {connect} from 'react-redux'

import Card from './Card/Card'
import 'aframe'
import * as actionTypes from '../../store/actions/actions'

class CardManager extends Component {
    state = {

    }


    componentDidMount () {
         setTimeout(
             () => {
                 this.props.startColourAnim( 'megamanBG' )
                 this.props.startAnimation( {x: Math.floor( Math.random() * this.props.dimensions.x ), z: Math.floor( Math.random() * this.props.dimensions.z )} )
             }, 3000
        )
        this.intervalAnimation = setInterval(
            () => {
                if ( !this.props.enter3D )
                    this.props.startAnimation( {x: Math.floor( Math.random() * this.props.dimensions.x ), z: Math.floor( Math.random() * this.props.dimensions.z )} )
            }
            , 7000)
        
    }

    render () {
        let cardEntityArray = []
        let delay = null
        for ( let z = 0; z < this.props.dimensions.z; z++ ) {
            let row = []
            for ( let x = 0; x < this.props.dimensions.x; x++ ) {
                if ( this.props.animCoords )
                    delay = this.props.distanceLookUp[this.props.animCoords.x][this.props.animCoords.z][this.props.waveType][x][z]
                else
                    delay = null
                row.push( <Card colourInd={this.props.colourIndex} animInd={this.props.animationIndex} distance={delay} position={`${x} -0 ${-z}`} key={`${x}_${z}`} id={`${x}_${z}`} x={x} z={z} /> )
            }
            cardEntityArray.push( row )
        }
        return (
            <a-entity click={this.cardClickedHandler} position={`-${Math.floor( this.props.dimensions.x / 2 )} 0 ${Math.floor( this.props.dimensions.z / 2.3 )}`} rotation="0 0 0" >
                {cardEntityArray}
            </a-entity>

        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        enter3D: state.aScene.enter3D,
        animationIndex: state.aScene.animationIndex, // access the aScene reducer slice from global state
        dimensions: state.aScene.dimensions,
        animCoords: state.aScene.animCoords,
        waveType: state.aScene.waveType,
        waveShape: state.aScene.waveShape,
        distanceLookUp: state.aScene.distanceLookUp,

        colourIndex: state.aScene.colourIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} ),
        setDimensions: ( dimensions ) => dispatch( {type: actionTypes.SET_DIMENSIONS, dimensions: dimensions} ),
        startColourAnim: ( ref ) => dispatch( {type: actionTypes.START_COLOUR_ANIM, ref: ref} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( CardManager )

// 3d colour controls

import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actionTypes from '../../../../store/actions/actions'

import Auxillery from '../../../../hoc/Auxillery/Auxillery'
import ImgButton from '../../../../UI/ImgButton/ImgButton'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import {withStyles} from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const styles = theme => ( {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper

    },
    subheader: {
        width: '100%'
    },
    gridList: {
        marginBottom: '20px !important'
    }
} )

class ColourControls extends Component {
    state = {

    }

    waveHeightHandler = ( value ) => {
        this.props.setWaveHeight( value )
    }

    waveSpeedHandler = ( value ) => {
        this.props.setWaveSpeed( value )
    }

    bounceSpeedHandler = ( value ) => {
        this.props.setBounceSpeed( value )
    }


    render () {
        const {classes} = this.props
        let frames = {
            single: [],
            animation: [],
            abstract: []
        }
        Object.keys( this.props.colours ).forEach( ( item, index ) => {
            let itemJSX = (
                <GridListTile key={this.props.colours[item][0].key} cols={1}>
                    <ImgButton click={() => this.props.startColourAnim( this.props.colours[item][0].key )} src={this.props.colours[item][0].imgSrc} />
                    <Typography variant="body2" align="center" color='textSecondary' />
                </GridListTile >
            )
            frames[this.props.colours[item][0].type].push( itemJSX )
        } )

        return (

            <div style={{overflow: 'hidden', padding: '10px 20px', boxSizing: 'border-box'}}>
                <Typography variant="body2" gutterBottom={true}>Select pixel art:</Typography>
                <GridList className={classes.gridList} cellHeight={90} cols={4}>
                    {frames.single}
                </GridList >
                <Typography variant="body2" gutterBottom={true}>Select Animation:</Typography>
                <GridList className={classes.gridList} cellHeight={90} cols={4}>
                    {frames.animation}
                </GridList >
                <Typography variant="body2" gutterBottom={true}>Select Colours:</Typography>
                <GridList className={classes.gridList} cellHeight={90} cols={4}>
                    {frames.abstract}
                </GridList >
            </div>
        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        colours: state.aScene.colours
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startColourAnim: ( ref ) => dispatch( {type: actionTypes.START_COLOUR_ANIM, ref: ref} )
    }
}


export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( ColourControls ) )

// motion controls.

import React, {Component} from 'react'
import Slider from '../../../../UI/Slider/Slider'
import {connect} from 'react-redux'

import * as actionTypes from '../../../../store/actions/actions'

import Auxillery from '../../../../hoc/Auxillery/Auxillery'
import ImgButton from '../../../../UI/ImgButton/ImgButton'
import waveTypes from './waveTypes'
import waveShapes from './waveShapes'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import {withStyles} from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const styles = theme => ( {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    subheader: {
        width: '100%'
    },
    gridList: {
        marginBottom: '0px !important'
    }
} )

class MotionControls extends Component {
    state = {

    }

    waveHeightHandler = ( value ) => {
        this.props.setWaveHeight( value )
    }

    waveSpeedHandler = ( value ) => {
        this.props.setWaveSpeed( value )
    }

    bounceSpeedHandler = ( value ) => {
        this.props.setBounceSpeed( value )
    }


    render () {
        const {classes} = this.props
        return (

            <div style={{overflow: 'hidden', padding: '10px 20px', boxSizing: 'border-box'}}>
                <Typography variant="body2" gutterBottom={true}>Select wave type:</Typography>
                <GridList className={classes.gridList} cellHeight={90} cols={4}>
                    {waveTypes.map( type => (
                        <GridListTile key={type.key} cols={1}>

                            <ImgButton click={() => this.props.setWaveType( type.key )} src={type.img} />
                        </GridListTile >
                    ) )
                    }
                </GridList >
                <Typography variant="body2" gutterBottom={true}>Select wave shape:</Typography>
                <GridList className={classes.gridList} cellHeight={90} cols={4}>
                    {waveShapes.map( shape => (
                        <GridListTile key={shape.title} cols={1}>
                            <ImgButton click={() => this.props.setWaveShape( shape.key )} src={shape.img} />
                            <Typography variant="body1" align="center" color='textSecondary' />

                        </GridListTile >
                    ) )
                    }
                </GridList >
                <Typography variant="body2" gutterBottom={true}>Select wave height:</Typography>
                <Slider min={1} max={20} step={1} default={this.props.waveHeight} onRelease={this.waveHeightHandler} />

                <Typography variant="body2" gutterBottom={true}>Wave travel speed:</Typography>
                <Slider min={5} max={35} step={3} default={this.props.waveSpeed} onRelease={this.waveSpeedHandler} />

                <Typography variant="body2" gutterBottom={true}>Bounce speed:</Typography>
                <Slider min={1} max={10} step={1} default={this.props.bounceSpeed} onRelease={this.bounceSpeedHandler} />

            </div>
        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        waveType: state.aScene.waveType,
        waveShape: state.aScene.waveShape,
        waveHeight: state.aScene.waveHeight,
        waveSpeed: state.aScene.waveSpeed,
        bounceSpeed: state.aScene.bounceSpeed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} ),
        setWaveType: ( waveType ) => dispatch( {type: actionTypes.SET_WAVE_TYPE, waveType: waveType} ),
        setWaveShape: ( waveShape ) => dispatch( {type: actionTypes.SET_WAVE_SHAPE, waveShape: waveShape} ),
        setWaveHeight: ( waveHeight ) => dispatch( {type: actionTypes.SET_WAVE_HEIGHT, waveHeight: waveHeight} ),
        setWaveSpeed: ( waveSpeed ) => dispatch( {type: actionTypes.SET_WAVE_SPEED, waveSpeed: waveSpeed} ),
        setBounceSpeed: ( bounceSpeed ) => dispatch( {type: actionTypes.SET_BOUNCE_SPEED, bounceSpeed: bounceSpeed} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles )( MotionControls ) )

// wave types 

import point from '../../../../assets/waves/point.png'
import diag1 from '../../../../assets/waves/diag1.png'
import diag2 from '../../../../assets/waves/diag2.png'
import vert from '../../../../assets/waves/vert.png'

const waveTypes = [
    {
        img: point,
        title: 'Point',
        key: 'pixel'
    },
    {
        img: diag1,
        title: 'Diagonal',
        key: 'diag1'
    },
    {
        img: diag2,
        title: 'Diagonal',
        key: 'diag2'
    },
    {
        img: vert,
        title: 'Vertical',
        key: 'vert'
    }
]

export default waveTypes

// drawer contents component

import React, {Component} from 'react'

import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'

import Divider from '@material-ui/core/Divider'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'


import MotionControls from './MotionControls/MotionControls'
import ColourControls from './ColourControls/ColourControls'
import Auxillery from '../../../hoc/Auxillery/Auxillery'

function TabContainer ( {children, dir} ) {
    return (
        <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
            {children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired
}

const styles = theme => ( {
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 300
    },
    slides: {
        padding: '5px'
    }
} )

class ASceneDrawer extends Component {
    state = {
        value: 0
    };

    handleChange = ( event, value ) => {
        this.setState( {value} )
    };

    handleChangeIndex = index => {
        this.setState( {value: index} )
    };

    render () {
        const {theme} = this.props

        return (
            <Auxillery>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Typography variant="subheading">3D controls</Typography>
                    </Toolbar>
                </AppBar>

                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="secondary"
                        scrollable={false}
                        style={{marginBottom: '0px'}}
                    >
                        <Tab style={{minWidth: '50%', marginBottom: '0px'}} label="Motion" />
                        <Tab style={{minWidth: '50%', marginBottom: '0px'}} label="Colour" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                    disabled={true}>
                        <MotionControls />
                        <ColourControls />
                </SwipeableViews>
            </Auxillery>
        )
    }
}

ASceneDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles( styles, {withTheme: true} )( ASceneDrawer )

// banner component

import React, {Component} from 'react'
import {connect} from 'react-redux'

import DrawerContents from './DrawerContents/DrawerContents'

import * as actionTypes from '../../store/actions/actions'

import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import AScene from '../../stateless/AScene/AScene'
import {withStyles} from '@material-ui/core/styles'

import myClasses from './HomeBanner.css'
import {Typography} from '@material-ui/core'

// import SecondaryLinks from '../../stateless/secondaryLinks/secondaryLinks'
import Button from '../../UI/Button/Button'
import DemoIcon from '../../assets/icons/demo'
import arrowLeft from '../../assets/icons/arrowLeft.svg'
import CloseIcon from '@material-ui/icons/Close'
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
        [theme.breakpoints.up( 'xs' )]: {maxHeight: '500px'},
        [theme.breakpoints.up( 'sm' )]: {maxHeight: '500px'},
        [theme.breakpoints.up( 'md' )]: {maxHeight: '700px'},
        [theme.breakpoints.up( 'xl' )]: {maxHeight: '800px'}
    },
    heightBreaks: {
        [theme.breakpoints.up( 'xs' )]: {height: '500px'},
        [theme.breakpoints.up( 'sm' )]: {height: '500px'},
        [theme.breakpoints.up( 'md' )]: {height: '700px'},
        [theme.breakpoints.up( 'xl' )]: {height: '800px'}
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
        flexGrow: 1
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
        this.props.startColourAnim( 'animBackdrops' )
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
                

                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor='right'
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaperTemp
                        }}
                    >
                        <IconButton
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DrawerContents align='center' />
                    </Drawer>
                </Hidden>

                <div className={classes.content}>
                    <AScene>
                        <div className={[myClasses.overlay, this.props.enter3D ? myClasses.removed : null].join( " " )}
                        >
                            <div className={myClasses.bg} />
                            <div className={[myClasses.contentHolder, classes.maxHeightBreaks].join( " " )}>
                                <Typography variant={'display3'}>Kye Huelin</Typography>
                                <Typography style={{opacity: 1}} variant={'headline'}>Front-end developer</Typography>
                                <Typography style={{marginTop: '0',opacity: 1}} variant={'body2'}>React, WebVR, Redux, JS2015+</Typography>
                                {/* <SecondaryLinks /> */}
                                <Typography className={classes.blockGreenText} variant={'body2'}>Contractor, London, available now</Typography>

                                <Hidden mdUp>
                                    <Button style={{marginTop:'10px',marginBottom:'5px'}} click={this.startDemoHandler} outline='true'  spacer="true" label={'Click to play Pixels'}>
                                        <DemoIcon height={25} />
                                    </Button>

                                    <Typography style={{width: '90%', maxWidth: '280px', textAlign: 'center', fontSize: '0.75em'}} variant={'body1'}>(Behind this text is a demo I call 'pixels': It's a homage to the games that inspired me to love tech)</Typography>
                                </Hidden>
                            </div>
                        </div>
                    </AScene>
                </div>

                <Hidden smDown implementation="css">
                    <Drawer
                        variant="persistent"
                        anchor='right'

                        open
                        classes={{
                            paper: [classes.drawerPaper, classes.heightBreaks].join( " " )
                        }}
                    >
                        <DrawerContents />
                        <div className={[myClasses.drawerOverlay, this.props.enter3D ? myClasses.removed : null].join( " " )}>
                            <div className={myClasses.bg} />
                            <div className={[myClasses.contentHolder, classes.maxHeightBreaks].join( " " )}>
                                <Typography style={{opacity: 1,marginBottom:'10px'}} variant={'headline'}>Interactive demo</Typography>
                                <Typography style={{marginBottom: '15px', textAlign: 'right'}} variant={'body1'}>Come and play this demo: 'pixels' a homage to the games that inspired me to love tech</Typography>


                                <Button style={{marginBottom: '5px'}} click={this.startDemoHandler} outline='true' spacer="true" label={'Click to play Pixels'}>
                                    <DemoIcon height={25} />
                                </Button>

                                <img className={myClasses.arrowLeft} src={arrowLeft} role="presentation" />
                            </div>
                        </div>
                    </Drawer>

                </Hidden>
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

// aniomate 3d

import {Component} from 'react'
import {connect} from 'react-redux'

import TimelineLite from 'gsap/src/uncompressed/TimelineLite.js'

import CustomEase from 'gsap/CustomEase'
import AFRAME from 'aframe'

class Animate extends Component {
    componentWillMount () {
        let thisClass = this
        AFRAME.registerComponent( 'animate', {
            schema: {
                key: {type: 'string', default: ''},
                distance: {type: 'number', default: -1},
                animIndex: {type: 'number', default: 0}
            },
            init: function () {
                this.myData = {}
                this.myData.wave = CustomEase.create( 'custom', 'M0,0,C0,0,0,0,0,0,0.046,0,0.024,-0.464,0.064,-0.464,0.114,-0.464,0.128,0.396,0.186,0.396,0.24,0.396,0.248,-0.222,0.292,-0.222,0.346,-0.222,0.348,0.164,0.4,0.164,0.452,0.164,0.454,-0.086,0.5,-0.086,0.546,-0.086,0.558,0.072,0.604,0.072,0.65,0.072,0.654,-0.04,0.7,-0.04,0.746,-0.04,0.754,0.024,0.794,0.024,0.836,0.024,0.862,-0.02,0.898,-0.02,0.934,-0.02,0.958,0,1,0' )
                this.myData.saw = CustomEase.create( 'custom', `M0,0 C0,0 0,0 0,0 0.006,-0.045 0.1,0.5 0.1,0.5 0.1,0.5 0.2,-0.24 0.2,-0.24 0.2,-0.24 0.302,0.236 0.302,0.236 0.302,0.236 0.4,-0.146 0.4,-0.146 0.4,-0.146 0.5,0.1 0.5,0.1 0.5,0.1 0.588,-0.096 0.588,-0.096 0.588,-0.096 0.7,0.066 0.7,0.066 0.7,0.066 0.794,-0.058 0.794,-0.058 0.794,-0.058 0.898,0.03 0.898,0.03 0.898,0.03 0.93,0.02 1,0` )
                this.myData.step = CustomEase.create( 'custom', `M0,0 C0,0 0.052,0.606 0.052,0.606 0.052,0.606 0.216,0.606 0.216,0.606 0.216,0.606 0.258,-0.13 0.258,-0.13 0.258,-0.13 0.422,-0.13 0.422,-0.13 0.422,-0.13 0.464,0.28 0.464,0.28 0.464,0.28 0.624,0.282 0.624,0.282 0.624,0.282 0.676,-0.132 0.676,-0.132 0.676,-0.132 0.826,-0.132 0.826,-0.132 0.826,-0.132 0.872,0 0.872,0 0.872,0 0.918,0 1,0` )
                this.myData.bounce = CustomEase.create( 'custom', `M0,0 C0,0 0.026,0.58 0.15,0.58 0.268,0.58 0.3,0 0.3,0 0.3,0 0.348,0.368 0.424,0.368 0.526,0.368 0.538,0 0.538,0 0.538,0 0.572,0.194 0.634,0.194 0.706,0.194 0.736,0 0.736,0 0.736,0 0.754,0.088 0.81,0.088 0.866,0.088 0.886,0 0.886,0 0.886,0 0.896,0.03 0.93,0.03 0.958,0.03 0.976,0 0.976,0 0.994,0 0.98,0 1,0`)
                this.myData.bounceLookUp = [9,9,8.2,7.5,7,6.2,5.4,4.6,3.8,3,2.2]
                this.myData.animations = {}
            },
            update: function ( oldData ) {
                const removeAnimation = ( animName, tween ) => {
                    tween.kill()
                    delete this.myData.animations[animName]
                }
                if ( this.data.animIndex !== oldData.animIndex && this.data.animIndex > 0 ) {
                    let animName = `anim${this.data.animIndex}`
                    this.myData.animations[animName] = {}

                    let delay = this.data.distance / thisClass.props.waveSpeed
                    this.myData.animations[animName].tween = new TimelineLite().to( this.myData.animations[animName], this.myData.bounceLookUp[thisClass.props.bounceSpeed], { y:thisClass.props.waveHeight, delay: delay, ease: this.myData[thisClass.props.waveShape], onComplete: () => removeAnimation( animName, this.myData.animations[animName].tween ) })
                    this.myData.animations[animName].y = 0
                }
            },
            tick: function ( ) {
                if ( Object.keys( this.myData.animations ).length > 0 ) {
                    const yPos = Object.keys( this.myData.animations ).reduce( ( accumulator, animation ) => { return this.myData.animations[animation].y + accumulator }, 0 )
                    this.el.object3D.position.y = yPos
                }
            }
        })
    }

    render () {
        return null
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        waveShape: state.aScene.waveShape,
        waveHeight: state.aScene.waveHeight,
        waveSpeed: state.aScene.waveSpeed,
        bounceSpeed: state.aScene.bounceSpeed
    }
}

export default connect( mapStateToProps )( Animate )

// animate cam 3d

import {Component} from 'react'
import AFRAME from 'aframe'

class AnimateCam extends Component {

    componentWillMount () {
        AFRAME.registerComponent( 'animate-cam', {
            schema: {
                animate: {type: 'boolean', default: false},
                position: {type: 'vec3', default: '0 0 0'}
            },

            init: function () {
            },
            update: function ( oldData ) {

            }
        } )
    }

    render () {
        return null
    }
}

export default AnimateCam

// control colour 3d

import {Component} from 'react'
import AFRAME from 'aframe'

import {connect} from 'react-redux'

import TimelineLite from 'gsap/src/uncompressed/TimelineLite.js'
import {Power0} from "gsap/src/uncompressed/easing/EasePack"


class Colour extends Component {

    componentWillMount () {
        let thisClass = this
        AFRAME.registerComponent( 'colour', {
            schema: {
                x: {type: 'number', default: 0},
                z: {type: 'number', default: 0},
                colourIndex: {type: 'number', default: 0}
            },

            init: function () {
                this.el.colourTween = new TimelineLite()
                this.el.loops = {}
            },
            update: function ( oldData ) {
                if ( this.data.colourIndex !== oldData.colourIndex && this.data.colourIndex > 0 ) {
                    this.el.colourTween.kill()
                    this.el.colourTween.clear( true )
                    this.el.colourTween = new TimelineLite()

                    const onComplete = ( loopId ) => {
                        if ( this.el.loops[loopId].loopCount > 0 ) {
                            this.el.loops[loopId].loopCount -= 1
                            this.el.colourTween.seek( this.el.loops[loopId].position )
                        } else ( this.el.loops[loopId].loopCount = this.el.loops[loopId].originalLoopCount )

                    }

                    thisClass.props.colours[thisClass.props.colourRef].forEach( ( frame ) => {
                        const rgb = frame.rgbaArray.data.slice( frame.rgbaArray.index( this.data.x, this.data.z, 0 ), frame.rgbaArray.index( this.data.x, this.data.z, 0 ) + 3 )
                        this.el.colourTween.to( this.el.object3D.children[0].material.color, frame.duration, {r: rgb[0], g: rgb[1], b: rgb[2], delay: frame.delay, ease: Power0.none} )
                        if ( frame.label ) {
                            this.el.colourTween.addLabel( frame.label )
                        }
                        if ( frame.goTo ) {
                            this.el.loops[frame.goTo.id] = {
                                id: [frame.goTo.id],
                                loopCount: frame.goTo.loopCount,
                                originalLoopCount: frame.goTo.loopCount,
                                position: frame.goTo.position
                            }
                            this.el.colourTween.to( this.el.object3D.children[0].material.color, frame.duration, {r: rgb[0], g: rgb[1], b: rgb[2], delay: frame.delay, ease: Power0.none, onComplete: onComplete, onCompleteParams: [frame.goTo.id]} )
                        } else {
                            this.el.colourTween.to( this.el.object3D.children[0].material.color, frame.duration, {r: rgb[0], g: rgb[1], b: rgb[2], delay: frame.delay, ease: Power0.none} )
                        }
                    } )
                }
            }
        } )
    }

    render () {
        return null
    }
}
const mapStateToProps = state => { // map redux state to class props
    return {
        colours: state.aScene.colours,
        colourRef: state.aScene.colourRef
    }
}

export default connect( mapStateToProps )( Colour )

// 3d cursor listner 

import {Component} from 'react'

import {connect} from 'react-redux'

import AFRAME from 'aframe'
import * as actionTypes from '../../../store/actions/actions'

class CursorListener extends Component {
    componentWillMount () {
        let thisClass = this
        AFRAME.registerComponent( 'cursor-listener', {
            schema: {
                x: {type: 'number', default: 0},
                z: {type: 'number', default: 0}
            },

            init: function () {
                let data = this.data // Component property values.
                let el = this.el // Reference to the component's entity.
                el.addEventListener( 'click', () => {
                    let coords = {x: data.x, z: data.z}
                    thisClass.props.startAnimation( coords )
                } )
            }
        } )
    }

    render () {
        return null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} )
    }
}

export default connect( null, mapDispatchToProps )( CursorListener )

// sky gradient cvode

import {Component} from 'react'
import AFRAME from 'aframe'

class SkyGradient extends Component {

    componentWillMount () {
        var top = new THREE.Vector3( 0.7, 0.1, 0.4 )
        var bottom = new THREE.Vector3( 0.25, 0.1, 0.4 )
        AFRAME.registerShader( 'gradient', {
            schema: {
                topcolor: {type: 'vec3', default: top, is: 'uniform'}, // 0.7 0.1 0.4
                bottomcolor: {type: 'vec3', default: bottom, is: 'uniform'}, // 0.25 0.1 0.4
                offset: {type: 'float', default: 1000, is: 'uniform'},
                exponent: {type: 'float', default: 0.8, is: 'uniform'}
            },
            vertexShader: [
                'varying vec3 vWorldPosition;',

                'void main() {',

                'vec4 worldPosition = modelMatrix * vec4( position, 1.0 );',
                'vWorldPosition = worldPosition.xyz;',

                'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );',

                '}'
            ].join( '\n' ),
            fragmentShader: [
                'uniform vec3 bottomcolor;',
                'uniform vec3 topcolor;',
                'uniform float offset;',
                'uniform float exponent;',
                'varying vec3 vWorldPosition;',
                'void main() {',
                ' float h = normalize( vWorldPosition + offset ).y;',
                ' gl_FragColor = vec4( mix( bottomcolor, topcolor, max( pow( max(h, 0.0 ), exponent ), 0.0 ) ), 1.0 );',
                '}'
            ].join( '\n' )
        } )

        AFRAME.registerPrimitive( 'a-sky-gradient', {
            defaultComponents: {
                geometry: {
                    primitive: 'sphere',
                    radius: 1000,
                    segmentsWidth: 64,
                    segmentsHeight: 20
                },
                material: {
                    shader: 'gradient',
                    side: 'double'
                },
                scale: '-1 1 1'
            },

            mappings: {
                topcolor: 'material.topcolor',
                bottomcolor: 'material.bottomcolor',
                offset: 'material.offset',
                exponent: 'material.exponent'
            }
        } )
    }

    render () {
        return null
    }
}


export default SkyGradient

// image example data

const exampleImages = {
    rs: [
        {
            src: 'http://kye.tech/imgs/rs/mobile.jpg',
            title: 'Title for the image',
            subText: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            src: 'http://kye.tech/imgs/rs/laptop.jpg',
            title: 'Title for the image',
            subText: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            src: 'http://kye.tech/imgs/rs/marketing.jpg',
            title: 'Title for the image',
            subText: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            src: 'http://kye.tech/imgs/rs/finder.jpg',
            title: 'Title for the image',
            subText: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            src: 'http://kye.tech/imgs/rs/bench1.jpg',
            title: 'Title for the image',
            subText: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            src: 'http://kye.tech/imgs/rs/bench3.jpg',
            title: 'Title for the image',
            subText: 'Here is a sub text, offering a brief description and a little more detail'
        }
    ],
    rhokett: [
        {
            src: 'http://kye.tech/imgs/rhokett/app.jpg',
            title: 'Title for the image',
            subText: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            src: 'http://kye.tech/imgs/rhokett/macbook.jpg',
            title: 'Title for the image',
            subText: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            src: 'http://kye.tech/imgs/rhokett/3dback.jpg',
            title: 'Title for the image',
            subText: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            src: 'http://kye.tech/imgs/rhokett/3dfront.jpg',
            title: 'Title for the image',
            subText: 'Here is a sub text, offering a brief description and a little more detail'
        }
    ],
    pret: [
        {
            src: 'http://kye.tech/imgs/pret/mobile.jpg',
            title: 'Title for the image',
            subText: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            src: 'http://kye.tech/imgs/pret/product.jpg',
            title: 'Title for the image',
            subText: 'Here is a sub text, offering a brief description and a little more detail'
        },
        {
            src: 'http://kye.tech/imgs/pret/packaging.jpg',
            title: 'Title for the image',
            subText: 'Here is a sub text, offering a brief description and a little more detail'
        }
    ]
}

export default exampleImages

// site layout component

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {withStyles} from '@material-ui/core/styles'
import {MuiThemeProvider} from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import darkTheme from '../../assets/themes/darkTheme'

import PageBlock from '../../UI/pageBlock/pageBlock'
import Footer from '../../stateless/footer/footer'
import NavBar from '../../stateless/navBar/navBar'

import * as siteActions from '../../store/actions/siteActions'

import SlideIn from '../../UI/SlideIn/SlideIn'
import ScaleIn from '../../UI/ScaleIn/ScaleIn'
import Display3 from '../../UI/Display3/Display3'

import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import DemoIcon from '../../assets/icons/demo'

import ChatIcon from '@material-ui/icons/Chat'


import scrollToComponent from 'react-scroll-to-component'
import {Typography} from '@material-ui/core';

const styles = theme => ( {
    drawerPaperTemp: {
        maxWidth: '350px',
        backgroundColor: theme.palette.grey.main
    },
    content: {
        flexGrow: 1
    },
    pageBlockIcon: {
        fontSize: '200px',
        color: 'white',
        opacity: '0.1',
        boxSizing: 'border-box',
        margin: '15px 0'
    }
} )

class Layout extends Component {
    state = {
        drawerOpen: false
    }

    scrollFromButtonHandler ( ref ) {
        scrollToComponent( ref, {offset: -50, align: 'top', duration: 1000, ease: 'inOutQuad'} )
    }

    componentWillMount () {
        window.addEventListener( "scroll", () => this.props.setCurrentBlockHandler( window.pageYOffset ) )
    }

    toggleDrawer = ( isOpen ) => {
        this.setState( {
            drawerOpen: isOpen
        } )
    }

    render () {
        const {classes, theme} = this.props
        return (
            <React.Fragment>
                <span onScroll={this.props.setCurrentBlockHandler} ></span>
                <MuiThemeProvider theme={darkTheme}>
                    <NavBar
                        toggleDrawer={() => this.toggleDrawer( true )}
                        scrollButton={this.scrollFromButtonHandler}
                        pageBlockData={this.props.pageBlockData} />
                </MuiThemeProvider>

                <Hidden mdUp={true}>
                    <Drawer
                        variant="temporary"
                        anchor='left'
                        open={this.state.drawerOpen}
                        onClick={() => this.toggleDrawer( false )}
                        classes={{
                            paper: classes.drawerPaperTemp
                        }}>
                        <div
                            role="button"
                            onClick={() => this.toggleDrawer( false )}
                            onKeyDown={() => this.toggleDrawer( false )}>

                            <AppBar color={'primary'} position="sticky" elevation={10}>
                                <Toolbar>
                                    <IconButton style={{color: 'white'}}>
                                        <CloseIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                            <List  >
                                <ListItem onClick={() => this.scrollFromButtonHandler( document.body )} button >
                                    <ListItemIcon style={{marginRight: '20px'}} color='secondary'>
                                    <DemoIcon  height={25} />
                                    </ListItemIcon>
                                    <Typography variant={'body2'}>Home</Typography>
                                </ListItem>
                                {this.props.pageBlockData.map( ( pageBlock, i ) => {
                                    return (
                                        <ListItem key={i} onClick={() => this.scrollFromButtonHandler( pageBlock.ref )} button >
                                            <ListItemIcon color='secondary'>
                                                {pageBlock.icon}
                                            </ListItemIcon>
                                            <Typography variant={'body2'}>{pageBlock.label}</Typography>
                                        </ListItem>
                                    )
                                } )}
                            </List>


                        </div>

                    </Drawer>
                </Hidden>

                {this.props.children}
                <MuiThemeProvider theme={darkTheme}>
                    <PageBlock icon={<ChatIcon />} label={'Contact'} backgroundColor={theme.palette.primary.main}>
                        <SlideIn partial={true}>
                            <Display3>Get in touch</Display3>
                        </SlideIn>
                        <ScaleIn><ChatIcon style={{color: 'white', padding: '30px 15px'}} className={classes.pageBlockIcon} /></ScaleIn>
                        <Grid container spacing={8}>
                            <Grid item xs={1} md={2} />
                            <Grid item xs={10} md={8}>
                                <MuiThemeProvider theme={darkTheme}>
                                    <Footer />
                                </MuiThemeProvider>
                            </Grid>
                        </Grid>
                    </PageBlock>
                </MuiThemeProvider>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        pageBlockData: state.site.pageBlockData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentBlockHandler: ( windowPos ) => dispatch( {type: siteActions.SET_CURRENT_BLOCK, windowPos: windowPos} ),
        addPageBlockDataHandler: ( pageBlockData ) => dispatch( {type: siteActions.ADD_PAGEBLOCK, pageBlockData: pageBlockData} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( withStyles( styles, {withTheme: true} )( Layout ) )

// svg animate component

import React from 'react'

import TimelineLite from 'gsap/src/uncompressed/TimelineMax.js'
import 'gsap/src/plugins/DrawSVGPlugin.js'
import {Elastic} from 'gsap/src/uncompressed/easing/EasePack'

class ManageChildren extends React.Component {
    state = {

    }
    tl = new TimelineLite()
    renderChildren () {
        return React.Children.map( this.props.children, ( child, i ) => {
            let clonedChild1 = React.cloneElement( child, {
                className: "fill",
                id: 'fill' + i,
                style: {fillOpacity: 0, transformOrigin:'50% 50%', transform:'scale(0)'}
            } )
            let clonedChild2 = React.cloneElement( child, {
                fill: "none",
                className: "stroke",
                id: 'stroke' + i,
                stroke: child.props.fill,
                strokeWidth: "2px",
                strokeOpacity:1
            } )
            let clonedArray = []
            clonedArray.push( [clonedChild1, clonedChild2] )
            return clonedArray
        } )
    }

    componentDidMount () {
        this.tl.set( `#${this.props.name} .stroke`, {drawSVG: "0% 0%"}, 0 )
        this.tl.set( `#${this.props.name} .stroke`, {delay: this.props.startDelay}, 0 )
            .staggerTo( `#${this.props.name} .stroke`, 1, {drawSVG: "0% 100%"}, 0.3 )
            .staggerTo( `#${this.props.name} .stroke`, 0.5, {strokeOpacity: 0}, 0.3 )
            .seek( 0 )
            .pause()

        let myFIll = document.getElementById( `${this.props.name}` ).getElementsByClassName( 'fill' )
        for ( let i = 0; i < myFIll.length; i++ ) {
            this.tl.set( myFIll[i].style, {fillOpacity: 0}, 0 )
            this.tl.to( myFIll[i].style, 0.5, {fillOpacity: 1}, 1.6 + ( this.props.startDelay / 100 ) )
            this.tl.to( myFIll[i].style, 1.5, {transform:'scale(1)', ease:Elastic.easeOut}, 1.2 + ( 0.1 * i ) )
        }
    }


    render () {
        if ( this.props.onScreen ) {
            this.tl.timeScale(1)
            this.tl.play()
        } else {
            this.tl.timeScale(8)
            this.tl.reverse()
        }

        return (
            <svg className="logoSVG" pathcount={React.Children.count( this.props.children )} version="1.1" id={this.props.name} x="0px" y="0px" viewBox="0 0 400 300">
                {this.renderChildren()}
            </svg>
        )
    }
}
export default ManageChildren

// track on screen

import React from 'react'

import TrackVisibility from 'react-on-screen'

function onScreen ( WrappedComponent,isPartial, offset ) {
    return class extends React.Component {
        componentWillReceiveProps ( nextProps ) {
            //console.log( 'Current props: ', this.props )
            //console.log( 'Next props: ', nextProps )
        }
        render () {
            // Wraps the input component in a container, without mutating it. Good!
            return (
                <TrackVisibility partialVisibility={isPartial} offset={offset} >
                    {( {isVisible} ) => <WrappedComponent onScreen={isVisible} {...this.props} />}
                </TrackVisibility>
            )
        }
    }
}

export default onScreen

// home page data

import React from 'react'

import Auxillery from '../../hoc/Auxillery/Auxillery'
import HomeBanner from '../../Containers/HomeBanner/HomeBanner'
import PageBlock from '../../UI/pageBlock/pageBlock'

import Display3 from '../../UI/Display3/Display3'
import Display1 from '../../UI/Display1/Display1'
import Headline from '../../UI/headline/headline'

import ScaleIn from '../../UI/ScaleIn/ScaleIn'
import SlideIn from '../../UI/SlideIn/SlideIn'
import CompanyLogo from '../../UI/companyLogo/companyLogo'

import {MuiThemeProvider} from '@material-ui/core/styles'
import {withTheme, withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import darkTheme from '../../assets/themes/darkTheme'
import PageList from '../../UI/pageList/pageList'

import SkillsBlockHolder from '../../UI/skillsBlockHolder/skillsBlockHolder'
import ReferenceHolder from '../../UI/referenceHolder/ReferenceHolder'
import ExampleImageHolder from '../../UI/ExampleImageHolder/ExampleImageHolder'

import rsLogo from '../../assets/SVG/logos/companies/rsLogo.svg'
import pretLogo from '../../assets/SVG/logos/companies/pretSmall.svg'
import rhokettLogo from '../../assets/SVG/logos/companies/rhokettStampLogo.svg'

// import aboutMeIcon from '../../assets/SVG/pageBlockIcons/aboutMe.svg'
import ExamplesIcon from '@material-ui/icons/Devices'
import RecommendationsIcon from '@material-ui/icons/ThumbUp'
import SkillsIcon from '@material-ui/icons/Settings'
import AboutMeIcon from '@material-ui/icons/FormatQuote'

const styles = {
    pageBlockIcon: {
        fontSize: '200px',
        color: 'white',
        opacity: '0.1',
        boxSizing: 'border-box',
        margin: '15px 0'
    }
}

const home = ( props ) => {
    const {theme, classes} = props
    return (
        <Auxillery>
            <MuiThemeProvider theme={darkTheme}>

                <Paper elevation={10}>
                    <HomeBanner />
                </Paper>


                <PageBlock label={'About Me'} icon={<AboutMeIcon />} backgroundColor={theme.palette.primary.main}>
                    <SlideIn partial={true}>
                        <Display3>About me</Display3>
                    </SlideIn>
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={2} />
                        <Grid item xs={10} md={8}>
                            <ScaleIn offset={50}>
                                <AboutMeIcon className={classes.pageBlockIcon} />
                            </ScaleIn>
                        </Grid>
                        <Grid item xs={4} sm={2} />
                        <Grid item xs={12} />

                        {/* ********** intro */}
                        <Grid item xs={1} md={2} />
                        <Grid item xs={10} md={8}>
                            <SlideIn partial={true}>

                                <SlideIn partial={true}>
                                    <Typography variant="body1">I am a front-end web developer with a specialism in 3D.  I have a blend of creative and technical skills with a passion for learning and problem solving. I help companies create a competitive edge by innovating the ways their users can connect to and visualise data.</Typography>
                                </SlideIn>
                                <SlideIn partial={true}>
                                    <Typography variant="body1">I’ve worked in a variety of industries over the last 10 years, ranging from engineering, insurance, e-commerce, B2B and B2C, I have a diverse range of skills in design, technical and business development, that give me the versatility to adapt to any job.</Typography>
                                </SlideIn>
                                <SlideIn partial={true}>
                                    <Typography variant="body1">I have knowledge of the latest frameworks and tools like React, Redux, JS2015+, GSAP, WebVR / Aframe amongst others (and will continue to learn more). With a background in 3d I’m seeing huge opportunities in the new wave of applications that can be created on the web and I’m excited to be evolving with it.</Typography>
                                </SlideIn>

                            </SlideIn>
                        </Grid>
                        <Grid item xs={1} md={2} />
                    </Grid>

                </PageBlock>

            </MuiThemeProvider>

            <PageBlock icon={<SkillsIcon />} label={'Skills'} backgroundColor={theme.palette.grey.main}>

                <SlideIn partial={true}>
                    <Display3>Skills</Display3>
                </SlideIn>

                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <SkillsIcon style={{color: 'black', padding: '15px'}} className={classes.pageBlockIcon} />
                        </ScaleIn>

                        <SlideIn partial={true}>
                            <Typography variant="body1">I’m never going to want to stop learning, I'm amazed at the power of the technology we have at our disposal today. Such is my interest in technology, that I will spend my free time learning it, not because I need to, but because I <i>want</i> to.</Typography>
                        </SlideIn>

                        {/* ********** technical skill set */}
                        <Display1>Technical</Display1>
                        <SkillsBlockHolder type={'technical'} />

                        {/* ********** software skill set */}
                        <Display1>Software</Display1>
                        <SkillsBlockHolder type={'software'} />

                        {/* ********** other skill set */}
                        <Display1>Other</Display1>
                        <PageList columns={2} list={[
                            'Rapid learning'
                            , 'Detailed researching',
                            'Prototyping and testing',
                            'Strong communicator ',
                            'Good presentation skills',
                            'Can influence at senior level',
                            'Exposure to agile environment',
                            'Creative and design sensibility'
                        ]} />
                    </Grid>
                </Grid>
            </PageBlock>

            <PageBlock icon={<ExamplesIcon />} label={'Examples'} backgroundColor={'white'}>
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <SlideIn partial={true}>
                            <Display3>Examples</Display3>
                        </SlideIn>
                    </Grid>
                </Grid>

                {/* ************************ RS COMPONENTS */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <CompanyLogo img={rsLogo} name={'RS Components'} width={100} />
                        </ScaleIn>
                        <Display1>RS Components</Display1>
                        <Typography variant="body1">I started this role as a web designer creating marketing pages for the multichannel team (Internationally). The role quickly evolved to supporting the UX design teams for mobile prototyping and development.</Typography >
                        <Typography variant="body1">Whilst in that role I impressed the company by developing (in my own time) a web based 3d demo, using JavaScript, WebGL, and three.js. Which earned me a new position in innovation, working with new technologies to drive user experiences such as web based 3d product systems and augmented reality for mobile, which were fast becoming the most important future technology platforms for the business. </Typography >

                        <Headline>Deliverables</Headline>
                        <PageList columns={1} list={[
                            'Earned a promotion from a pioneering 3d web prototype',
                            'Supported the developement of an experimental AR product viewer',
                            'Built marketing pages to support product launches of global brands',
                            'Built a prototype mobile interface with UX team'
                        ]} />
                    </Grid>
                </Grid>
                <ExampleImageHolder company='rs' />
                {/* {exampleImages.rs.map( ( exampleImage, i ) => {
                    return <PageImage key={i} src={exampleImage.src} title={exampleImage.title} subText={exampleImage.subText} />
                } ) */}


                {/* ************************ RHOKETT */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                    <ScaleIn offset={50}>
                        <CompanyLogo img={rhokettLogo} width={170} />
                    </ScaleIn>
                            <Display1>Rhokett</Display1>
                        

                        <Typography variant="body1">Rhokett is a company Ive done a lot of freelance work for over the years, most recently I worked on a prototype for a new 3d product viewing system for their dessert range using a photogrammetry technique for photorealistic 3d. Its then run through simplification processes to bring each dessert down from 60MB of data to under 1MB and can run on low-end devices. </Typography>

                        <Headline>Deliverables</Headline>

                        <PageList columns={1} list={[
                            'Created award nominated designs for luxury packaging',
                            'Designed and built their web site end to end',
                            'Prototyped 3D photogrammatery for photo-real products',
                        ]} />
                    </Grid>
                </Grid>
                <ExampleImageHolder company='rhokett' />
                {/* {exampleImages.rhokett.map( ( exampleImage, i ) => {
                    return <PageImage key={i} src={exampleImage.src} title={exampleImage.title} subText={exampleImage.subText} />
                } ) */}


                {/* ************************ PRET */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <CompanyLogo style={{marginBottom: '50px'}} img={pretLogo} width={170} />
                        </ScaleIn>
                    </Grid>
                </Grid>
                <ExampleImageHolder company='pret' />

            </PageBlock>

            <PageBlock icon={<RecommendationsIcon />} label={'Recommendations'} backgroundColor={theme.palette.grey.main}>


                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <SlideIn partial={true}>
                            <Display3>Recommendations</Display3>
                        </SlideIn>
                        <ScaleIn offset={50}>
                            <RecommendationsIcon style={{color: 'black', padding: '15px'}} className={classes.pageBlockIcon} />
                        </ScaleIn>
                    </Grid>
                </Grid>

                <ReferenceHolder />
            </PageBlock>
        </Auxillery >
    )
}

export default withTheme()( withStyles( styles )( home ) )

// ascene code

import React from 'react'
import CardManager from '../../Containers/CardManager/CardManager'
import Camera from '../AScene/Camera/Camera'

import classes from './AScene.css'
import RegisterAframeComponents from '../../Containers/RegisterAframeComponents/RegisterAframeComponents'
import 'aframe'

const AScene = ( props ) => {

    return (
        <header>
            <section>
                <a-scene  colour="" shadow  embedded vr-mode-ui="enabled: false" background="transparent: true" class={classes.embedded}>
                <RegisterAframeComponents />
                    <Camera />
                    <a-entity light="type: hemisphere; color: #ffffff; groundColor: #a3a3a3; intensity: 1"></a-entity>
                    <a-entity light="
                        type: directional;
                        intensity:0.3;
                        target:#directionaltarget;">
                        <a-entity
                            id="directionaltarget"
                            position="-0.5 -0.4 -1" />
                    </a-entity>
                    <a-entity light="type: point; intensity: 0.6; distance: 1000; decay: 0"
                        position="0 10 -100" />
                    <a-entity light="type: point; intensity: 0.4; distance: 1000; decay: 0"
                        position="0 10 100" />
                    <a-entity id="center" position="0 -2 0" opacity="0" material="opacity: 0;" geometry="primitive: box; height:0.1; width:0.1; depth:0.1"></a-entity>
                    <a-sky-gradient></a-sky-gradient>
                    <CardManager/>
                    {props.children}
                </a-scene>
            </section>
        </header >
    )
}


export default AScene

ascene Camera

import 'aframe'
import React, {Component} from 'react'
import {connect} from 'react-redux'

import 'aframe-orbit-controls-component-2'

class Camera extends Component {
    render () {
        return (
            <a-camera
                animate-cam="" 
                id="camera"
                fov="22"
                near="1"
                far="4000"
                position={this.props.enter3D ? '-10 35 40' : '-10 13 23'} /* position="-10 30 40" */
                orbit-controls={`
                    autoRotate: ${this.props.enter3D ? 'false;' : 'true;'}
                    autoRotateSpeed: 0.15;
                    target: #center;
                    enableDamping: true;
                    dampingFactor: 0.125;
                    rotateSpeed:0.25;
                    minDistance:3;
                    ${this.props.enter3D ? 'rotateTo: -10 30 40;' : ''}
                    distance:99;
                    maxDistance:100;`}>  {/* camera="near:1; fov:22; far:40000;"> */}
                <a-entity cursor="rayOrigin:mouse; fuse: false"></a-entity>
            </a-camera>
        )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        enter3D: state.aScene.enter3D
    }
}

export default connect( mapStateToProps )( Camera )

// footer

import React from 'react'
import Typography from '@material-ui/core/Typography'
import classes from './footer.css'
import SecondaryLinks from '../secondaryLinks/secondaryLinks'

const footer = ( props ) => {
    return (
        <footer className={classes.footer}>
            <div className={classes.column}>
                <Typography variant='subheading'><a href="tel:+44 7490 696 991">+44 7490 696 991</a> </Typography>

                <Typography style={{marginBottom: '20px'}} variant='subheading'> <a href="mailto:kyehuelin@gmail.com">kyehuelin@gmail.com</a></Typography>
                <SecondaryLinks  />
            </div>
        </footer>
    )
}

export default footer

// namver 

import React from 'react'

import Button from '../../UI/Button/Button'

import Hidden from '@material-ui/core/Hidden'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ThreeDRotation from '@material-ui/icons/ThreeDRotation'

import SecondaryLinks from '../secondaryLinks/secondaryLinks'
import DemoIcon from '../../assets/icons/demo'

const navBar = ( props ) => {
    return (
        <AppBar position="sticky" elevation={10}>
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
