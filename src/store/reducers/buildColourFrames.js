import getPixels from 'get-pixels'

import singleBackdrops from './singleBackdrops'
// import animBackdrops from './animBackdrops'
// import animSonic from './animSonic'
// import animKart from './animKart'
// import animSF2 from './animSF2'
import abstract from './abstractBackdrops'

let colours = {}

colours = {...singleBackdrops}
// colours.animBackdrops = animBackdrops
// colours.sonicAnim = animSonic
// colours.animKart = animKart
// colours.animSF2 = animSF2
//colours = Object.assign(abstract, colours)


const reverseArray = ( array ) => {
    let reversedArray = []

    for ( let x = array.shape[1]; x >= 0; x-- ) {
        for ( let z = 0; z < array.shape[0]; z++ ) {
            reversedArray.push( ...array.data.slice( array.index( z, x, 0 ), array.index( z, x, 0 ) + array.shape[2] ) )
        }
    }
    return reversedArray
}

const normaliseArray = ( array ) => {
    for ( let x = 0; x < array.shape[0]; x++ ) {
        for ( let z = 0; z < array.shape[1]; z++ ) {
            for ( let rgba = 0; rgba < array.shape[2]; rgba++ ) {
                const currentVal = array.get( x, z, rgba )
                array.set( x, z, rgba, currentVal / 255 )
            }
        }
    }
}

Object.keys( colours ).forEach( ( animation, i ) => {
    colours[animation].forEach( ( data, i ) => {
        getPixels( data.imgSrc, function ( err, pixels ) {
            pixels.data = reverseArray( pixels )
            normaliseArray( pixels )
            data.rgbaArray = pixels
        } )
    } )

} )

export default colours