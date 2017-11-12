import request from 'superagent'

export const receivePlacesBySport = (places) => {
  return {
    type: 'RECEIVE_PLACES_BY_SPORT',
    places
  }
}

export function getPlacesBySport () {
  return (dispatch) => {
    request
      .get(`/api/places`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receivePlacesBySport(res.body))
      })
  }
}
