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