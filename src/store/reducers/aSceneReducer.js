import * as actionTypes from '../actions/actions'
import colours from './buildColourFrames'

const calcualteDistanceLookup = ( newX, newZ ) => {
    // let selectType = ['pixel','diagonal1','diagonal2','vertical','horizontal']
    let updatedDistanceLookUp = []
    for ( let x = 0; x < newX; x++ ) {
        let updatedDistanceLookUpRow = []
        for ( let z = 0; z < newZ; z++ ) {
            let pixelDistanceArray = []
            for ( let x2 = 0; x2 < newX; x2++ ) {
                let pixelDistanceArrayRow = []
                for ( let z2 = 0; z2 < newZ; z2++ ) {
                    pixelDistanceArrayRow[z2] = Math.hypot( Math.abs( x - x2 ), Math.abs( z - z2 ) ) // pixel
                }
                pixelDistanceArray.push( pixelDistanceArrayRow )
            }
            updatedDistanceLookUpRow[z] = {}
            updatedDistanceLookUpRow[z].pixel = pixelDistanceArray
        }
        updatedDistanceLookUp.push( updatedDistanceLookUpRow )
    }
    return updatedDistanceLookUp
}

const dim = {
    x:40,
    z:30
}

const initialState = {
    enter3D: false,
    animationIndex: 0,
    dimensions: {
        x: dim.x,
        z: dim.z
    },
    waveType: 'pixel',
    waveShape: 'wave',
    waveHeight: 4,
    waveSpeed: 4,
    bounceSpeed: 2,
    animCoords: null,
    stopAnim: false,
    distanceLookUp: calcualteDistanceLookup( dim.x, dim.z ),
    paused: false,
    autoWave: true,
    colours: colours,
    colourIndex: 0,
    colourRef: null,
    cubeHeight: 0.6
}



const ASceneReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.TOGGLE_ENTER_3D:
        return {
            ...state,
            enter3D: !state.enter3D,
            waveHeight: 5,
            waveSpeed: 8,
            bounceSpeed: 4
        }
        case actionTypes.TOGGLE_PAUSE:
            return {
                ...state,
                paused: !state.paused
            }
        case actionTypes.TOGGLE_AUTO_WAVE:
            return {
                ...state,
                autoWave: !state.autoWave
            }
        case actionTypes.START_ANIMATION:
            return {
                ...state,
                animCoords: {...action.coords},
                animationIndex: state.animationIndex + 1
            }
        case actionTypes.SET_DIMENSIONS:
            return {
                ...state,
                dimensions: {...action.dimensions},
                distanceLookUp: calcualteDistanceLookup( action.dimensions.x, action.dimensions.z )
            }
        case actionTypes.SET_WAVE_TYPE:
            return {
                ...state,
                waveType: action.waveType
            }
        case actionTypes.SET_WAVE_SHAPE:
            return {
                ...state,
                waveShape: action.waveShape
            }
        case actionTypes.SET_WAVE_HEIGHT:
            return {
                ...state,
                waveHeight: action.waveHeight
            }
        case actionTypes.SET_WAVE_SPEED:
            return {
                ...state,
                waveSpeed: action.waveSpeed
            }
        case actionTypes.SET_BOUNCE_SPEED:
            return {
                ...state,
                bounceSpeed: action.bounceSpeed
            }
            case actionTypes.SET_CUBE_HEIGHT:
                return {
                    ...state,
                    cubeHeight: action.cubeHeight
                }
        case actionTypes.START_COLOUR_ANIM:
            return {
                ...state,
                colourRef: action.ref,
                colourIndex: state.colourIndex + 1
            }
        default:
            return state
    }
}
export default ASceneReducer
