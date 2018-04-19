import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import RegisterAframeComponents from './Containers/RegisterAframeComponents/RegisterAframeComponents'

import Layout from './hoc/Layout/Layout'

import Home from './pages/Home/Home'
import CV from './pages/CV/CV'
import Refs from './pages/Refs/Refs'



class App extends Component {
    render () {
        return (
            <div>
                <RegisterAframeComponents />
                <Layout>
                    <Switch>
                        <Route path="/cv" component={CV} />
                        <Route path="/refs" component={Refs} />
                        <Route path="/" exact component={Home} />
                        <Route render={() => <h1>Not found</h1>} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
