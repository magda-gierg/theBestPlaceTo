import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Sports from './Sports'

class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>The Best Place To ...</h1>
        <Route path="/" component={Sports} />
      </Router>
    )
  }
}



export default connect()(App)
