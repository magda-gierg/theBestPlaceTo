import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'
import Footer from './Footer'
// import Nav from './Nav'
// import Sports from './containers/Sports'

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        // <Nav />
        <Footer />
      </div>
    </Router>
  )
}

export default App
