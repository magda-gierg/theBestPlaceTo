import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import About from './About'
// import Sports from './containers/Sports'

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Nav />
         <Route exact path='/' component={Home} />
         <Route exact path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
