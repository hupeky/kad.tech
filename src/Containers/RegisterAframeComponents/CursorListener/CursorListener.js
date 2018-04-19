import React, {Component} from 'react'

import {connect} from 'react-redux'

import AFRAME from 'aframe'
import * as actionTypes from '../../../store/actions'

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
                    console.log( el.object3D, 'was clicked' )
                    let coords = {x: data.x, z: data.z}
                    thisClass.props.startAnimation( coords )
                } )
            }
        } )
    }

    render () {
        return <div></div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: ( coords ) => dispatch( {type: actionTypes.START_ANIMATION, coords: coords} ),
    }
}

export default connect( null, mapDispatchToProps )( CursorListener )

