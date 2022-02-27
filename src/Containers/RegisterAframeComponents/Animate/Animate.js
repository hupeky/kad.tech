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
    componentWillMount () {
        let thisClass = this
        AFRAME.registerComponent( 'animate', {
            schema: {
                key: {type: 'string', default: ''},
                distance: {type: 'number', default: -1},
                animIndex: {type: 'number', default: 0},
                paused: {type: 'boolean', default: false},
                animCoords: {type: 'vec2', default: {x: 0, y: 0}},
                position: {type: 'vec3', default: {x: 0, y: 0, z: 0}}
            },
            init: function () {
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
