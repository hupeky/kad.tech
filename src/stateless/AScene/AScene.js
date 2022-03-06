import React, {Component} from 'react'
import CardManager from '../../Containers/CardManager/CardManager'
import Camera from '../AScene/Camera/Camera'

import classes from './AScene.css'
import RegisterAframeComponents from '../../Containers/RegisterAframeComponents/RegisterAframeComponents'
import logo512 from "../../assets/imgs/logo512.jpg"

import {connect} from 'react-redux'

import * as actionTypes from '../../store/actions/actions'

class AScene extends Component {
    render () {
    return (
        <header>
            <section>
                <a-scene   embedded vr-mode-ui="enabled: false" background="transparent: true" class={classes.embedded}>
                <a-assets timeout="10000">
                    <img alt="cubes texture" onLoad={() => this.props.setLoadedTexture(true)} id="logo" src={logo512} />
                </a-assets>
                <RegisterAframeComponents />
                    <Camera />
                    <a-entity light="type: hemisphere; color: #ffffff; groundColor: #a3a3a3; intensity: 0.6"></a-entity>
                    <a-entity light="
                        type: directional;
                        intensity:0.6;
                        target:#directionaltarget;">
                        <a-entity
                            id="directionaltarget"
                            position="-0.5 -0.4 -1" />
                    </a-entity>
                    <a-entity light="type: point; intensity: 0.6; distance: 1000; decay: 0"
                        position="0 10 -100" />
                    <a-entity light="type: point; intensity: 0.3; distance: 1000; decay: 0"
                        position="0 10 100" />
                    <a-entity id="center" position="0 -3 0" opacity="0" material="opacity: 0;" geometry="primitive: box; height:0.1; width:0.1; depth:0.1"></a-entity>
                    <a-sky-gradient></a-sky-gradient>

                    {this.props.children}
                    <CardManager/>
                </a-scene>
            </section>
        </header >
    )
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        cubeHeight: state.aScene.cubeHeight
    }
}


const mapDispatchToProps = dispatch => {
    return {
        setLoadedTexture: ( loadedTexture ) => dispatch( {type: actionTypes.SET_LOADED_TEXTURE, loadedTexture: loadedTexture} )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( AScene )
