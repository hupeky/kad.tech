import {Component} from 'react'
import AFRAME from 'aframe'

class SkyGradient extends Component {

    componentWillMount () {
        // var top = new THREE.Vector3( 0.7, 0.1, 0.4 )
        // var bottom = new THREE.Vector3( 0.25, 0.1, 0.4 )
                var top = new THREE.Vector3( 0,0,0 )
        var bottom = new THREE.Vector3( 0,0,0 )
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