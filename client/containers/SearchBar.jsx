import React from 'react'
import {connect} from 'react-redux'

import SearchResults from './SearchResults'
import {getSports} from '../actions/sports'
import {getPlacesBySport} from '../actions/placesBySport'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sports: props.sports,
      placesBySport: props.placesBySport,
      searchSport: '',
      searchResults: [],
      showPlaces: false,
      sortedPlaces: []

    }
  }

  showPlaces (selectedSport) {
    let sortedPlaces = this.state.placesBySport.filter((sport) => {
      return sport.sport_id == selectedSport.sport_id
    })
    this.setState({sortedPlaces, showPlaces: true})
  }
  renderPlaces () {
    return (
      <div className='search-results-places' >
        <h5>the best places to do {sport.sport_id}:</h5>
        <SearchResults places={this.state.sortedPlaces}/>
      </div>
    )
  }

  componentDidMount () {
    this.props.dispatch(getSports())
    this.props.dispatch(getPlacesBySport())
    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler (e) {
    this.setState({
      searchSport: e.target.value,
      searchResults: this.filterSearchSports(e.target.value),
      showPlaces: false,
      sortedPlaces: []
    })
  }
  componentWillReceiveProps ({placesBySport, sports}) {
    this.setState({placesBySport, sports})
  }
  filterSearchSports (searchTerm) {
    if (searchTerm == '' || !searchTerm) return []
    return this.state.sports.filter((sport) => {
      return sport.sport_name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }
  renderSportInfo (sport, key) {
    return <div className="search-result" key={key}>
      <button onClick={() => this.showPlace(sport)}>{sport.sport_name}</button>
    </div>
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
        <div className='search-results-list'>
          {this.state.searchResults.map((sport, key) => this.renderSportInfo(sport, key))}
        </div>

        {this.state.showPlaces && this.renderPlaces()}
      </div>
    )
  }
}

const mapStateToProps = (state, other) => {
  return {sports: state.sports,
    places: state.places
  }
}

export default connect(mapStateToProps)(SearchBar)
