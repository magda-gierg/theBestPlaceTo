import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'
import Footer from './Footer'
import Sports from './Sports'

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Nav />
        // <Route exact path='/' component={} />      
        // <Route exact path='/categories/:category_id' component={ItemClass} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
