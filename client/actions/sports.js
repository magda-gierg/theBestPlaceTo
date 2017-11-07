import request from 'superagent'

export const receiveSports = (sports) => {
  return {
    type: 'RECEIVE_SPORTS',
    sports
  }
}

export function getSports () {
  return (dispatch) => {
    request
      .get(`/api/sports`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveSports(res.body))
      })
  }
}
