import {Component} from 'react'
import AFRAME from 'aframe'

class AnimateCam extends Component {

    componentDidMount () {
        AFRAME.registerComponent( 'animate-cam', {
            schema: {
                animate: {type: 'boolean', default: false},
                position: {type: 'vec3', default: {x: 0, y: 0, z: 0}}
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
