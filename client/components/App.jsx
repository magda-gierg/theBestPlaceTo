import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
// import Sports from './containers/Sports'

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Nav />
         <Route exact path='/' component={Home} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
