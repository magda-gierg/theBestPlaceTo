function placesBySport (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_PLACES_BY_SPORT':
      return action.placesBySport
    default:
      return state
  }
}

export default placesBySport
