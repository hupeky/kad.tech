import React from 'react'


const Card = ( props ) => {
    const {height} = props

    return (
        <a-box
            cursor-listener={`x:${props.x}; z:${props.z}`} clickIdPass={props.click} x={props.x} z={props.z}
           animate={`distance: ${props.distance}; animIndex:${props.animInd}; animCoords:${props.animCoords.x} ${props.animCoords.z}; position:${props.position}; paused:${props.paused}`}
            material="color: #FFF; roughness: 0.8; metalness: 0.1; opacity: 0"
            position={props.position}
            src="#logo"
            colourFromTexture={`x:${props.x}; z:${props.z}; colourIndex:${props.colourInd}; dimensions:${props.dimensions.x} ${props.dimensions.z}; lookup:${props.lookup[0]}, ${props.lookup[1]}, ${props.lookup[2]}, ${props.lookup[3]};`}
            geometry={`primitive: box; skipCache: true; height:${height}; width:0.96; depth:0.96`}>

        </a-box>
    )
}

export default Card
