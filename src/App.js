import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

// import 'typeface-roboto'
import Layout from './hoc/Layout/Layout'

import Home from './pages/Home/Home'

import Auxillery from './hoc/Auxillery/Auxillery'



class App extends Component {
    render () {
        return (
            <Auxillery>
                <Layout>
                    <Switch>
                        {/* <Route path="/cv" exact component={CV} /> */}
                        <Route path="/"  render={() => <Home {...this.props} />}/>
                        < Route render={() => <h1>Not found</h1>} />
                    </Switch>
                </Layout>
            </Auxillery>
        )
    }
}

export default App
