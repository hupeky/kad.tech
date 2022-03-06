import {Component} from 'react'
import AFRAME from 'aframe'

// Linear.easeIn
class Colour extends Component {

    componentDidMount () {
        AFRAME.registerComponent( 'colourfromtexture', {
            schema: {
                x: {type: 'number', default: 0},
                z: {type: 'number', default: 0},
                dimensions: {type: 'vec2', default: {x: 0, y: 0}},
                lookup: {type: 'array', default: [0,0,0,0]}
            },
            init: function () {
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
                this.el.object3D.children[0].material.map.magFilter = 1006
               this.el.object3D.children[0].material.map.minFilter = 1006 // 1006 for filtered // 1003 for nearest neighbor
               this.el.object3D.children[0].material.opacity = 1



            },
            update: function () {
                this.el.object3D.children[0].material.opacity = 1
            }
        } )
    }

    render () {
        return null
    }
}


export default  Colour