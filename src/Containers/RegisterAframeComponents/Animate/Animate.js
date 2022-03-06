import {Component} from 'react'
import {connect} from 'react-redux'
import waveLookup from './waveLookup'
import TimelineLite from '../../../assets/gsap/TimelineLite'
import AFRAME from 'aframe'

class Animate extends Component {
     removeAnimation = ( animName, tween, thisCom ) => {
        tween.kill()
        delete thisCom.myData.animations[animName]
    }
    startAnimation = (thisCom, distance) => {
        let animName = `anim${thisCom.data.animIndex}`
        thisCom.myData.animations[animName] = {}

        let delay = distance / this.props.waveSpeed
        thisCom.myData.animations[animName].tween = new TimelineLite().to( thisCom.myData.animations[animName], waveLookup.bounceLookUp[this.props.bounceSpeed], { y:this.props.waveHeight, delay: delay, ease: waveLookup.wave, onComplete: () => this.removeAnimation( animName, thisCom.myData.animations[animName].tween, thisCom ) })
        thisCom.myData.animations[animName].y = 0
    }
    componentDidMount () {
        let thisClass = this
        AFRAME.registerComponent( 'animate', {
            schema: {
                key: {type: 'string', default: ''},
                distance: {type: 'number', default: -1},
                animIndex: {type: 'number', default: 0},
                paused: {type: 'boolean', default: false},
                animCoords: {type: 'vec2', default: {x: 0, y: 0}},
                position: {type: 'vec3', default: {x: 0, y: 0, z: 0}},
                x: {type: 'number', default: 0},
                z: {type: 'number', default: 0},
                dimensions: {type: 'vec2', default: {x: 0, y: 0}},
                lookup: {type: 'array', default: [0,0,0,0]}
            },
            init: function () {
                /* build uv coords texture */

                const textureOffset = true

                // pre compute these values outside the loop to speedup processing time
               const [xIncrement, yIncrement, xIncrementHalf, yIncrementHalf] = this.data.lookup

                let uvAttribute = this.el.object3D.children[0].geometry.attributes.uv
                let posAttribute = this.el.object3D.children[0].geometry.attributes.position
                uvAttribute.needsUpdate = true

                for ( let i = 0; i < uvAttribute.count; i ++ ) {
                     let u = this.data.x * xIncrement
                     let v = this.data.z * yIncrement
                     let textureOffsetX = textureOffset ? posAttribute.getX(i) / this.data.dimensions.x : 0
                     let textureOffsetY = textureOffset ? posAttribute.getZ(i) / this.data.dimensions.y : 0

                    uvAttribute.setXY( i, u + textureOffsetX - xIncrementHalf, v - textureOffsetY - yIncrementHalf)
                }


                this.el.object3D.children[0].material.side = "double"
                this.el.object3D.children[0].material.transparent = true
                this.el.object3D.children[0].material.alphaTest = 0.5
            //     this.el.object3D.children[0].material.map.magFilter = 1006
            //    this.el.object3D.children[0].material.map.minFilter = 1006 // 1006 for filtered // 1003 for nearest neighbor
               this.el.object3D.children[0].material.opacity = 1


                /* build and start the animation */


                this.myData = {}
                this.myData.animations = {}
                this.myData.pause = false

                const x = this.data.position.x
                const z = this.data.position.z

                const x2 = this.data.animCoords.x
                const z2 = this.data.animCoords.y

                const distance = Math.hypot( Math.abs( x - x2 ), Math.abs( z - z2 ) ) // pixel
                thisClass.startAnimation(this, distance)
            },
            update: function ( oldData ) {

                if ( this.data.animIndex !== oldData.animIndex && this.data.animIndex > 0 ) {
                    const x = this.data.position.x
                    const z = this.data.position.z

                    const x2 = this.data.animCoords.x
                    const z2 = -this.data.animCoords.y
                    const distance = Math.hypot( Math.abs( x - x2 ), Math.abs( z - z2 ) ) // pixel
                    thisClass.startAnimation(this, distance)
                }
                if ( this.data.paused) {
                    if ( Object.keys( this.myData.animations ).length > 0 ) {
                        Object.keys( this.myData.animations ).forEach( ( animation ) => this.myData.animations[animation].tween.pause() )
                    }
                } else {
                    if ( Object.keys( this.myData.animations ).length > 0 ) {
                        Object.keys( this.myData.animations ).forEach( ( animation ) => this.myData.animations[animation].tween.play() )
                    }
                }
            },
            tick: function ( ) {
                if ( !this.data.paused) {
                    if ( Object.keys( this.myData.animations ).length > 0 ) {
                        const yPos = Object.keys( this.myData.animations ).reduce( ( accumulator, animation ) => { return this.myData.animations[animation].y + accumulator }, 0 )
                        this.el.object3D.position.y = yPos
                    }
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
