import React from 'react'
// import {connect} from 'react-redux'

import SearchResults from './SearchResults'
import {getSports} from '../actions/sports'
import {getPlaceBySport} from '../actions/placesBySport'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sports: props.sports,
      placesBySport: props.placesBySport,
      searchSport: '',
      searchResults: []
    }
  }



render() {
  const {sports, dispatch} = this.props
  return (
    <div className='container search-bar-body'>
      <div>
        <h4 className={this.state.searchSport.length == 0 ? 'search-bar-header-ready animated bounceIn':"search-bar-header"}>Pick the right sport for you!</h4>
      </div>
      <form className={this.state.searchSport.length == 0 ? 'search-box-ready':'search-box'}>
        <input placeholder='Search' type='text' onChange={(e) => this.searchHandler(e)}></input>
      </form>
      </div>
    )
  }
}



export default SearchBar
