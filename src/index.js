import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {BrowserRouter} from 'react-router-dom'

import { MuiThemeProvider } from '@material-ui/core/styles'
import './globalStyles.css'
import App from './App'
import 'aframe'

import {createStore, combineReducers} from 'redux'
import ASceneReducer from './store/reducers/aSceneReducer'
import siteReducer from './store/reducers/siteReducer'

import lightTheme from './assets/themes/lightTheme'

import { unregister } from './registerServiceWorker'
unregister()

const rootReducer = combineReducers( {
    aScene: ASceneReducer,
    site: siteReducer
} )

const store = createStore( rootReducer )

const Component = (
    <Provider store={store}>

        <MuiThemeProvider theme={lightTheme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MuiThemeProvider>

    </Provider>
)

ReactDOM.render( Component, document.getElementById( 'root' ) )
