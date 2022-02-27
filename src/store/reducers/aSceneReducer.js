import * as actionTypes from '../actions/actions'


const dim = {
    x:35,
    z:35
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
    animCoords: {x:16, z:-16},
    stopAnim: false,
    paused: false,
    autoWave: true,
    // colours: colours,
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
                dimensions: {...action.dimensions}
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
