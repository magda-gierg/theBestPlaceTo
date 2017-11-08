import React from 'react'
import {connect} from 'react-redux'
import {getSports} from '../actions/sports'

const Sports = () => {
  return (

    {sports.map((sport, i) => {
      return (
        <div key={i}>
          <a onClick={() => select(sport) }>{sport.name}</a>
        </div>
      )
    })}    
  )
}

export default Sport
