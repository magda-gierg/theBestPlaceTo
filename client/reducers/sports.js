function categories (state = [], action = {}) {
  switch (action.type) {
    case 'RECEIVE_SPORTS':
      return action.sports
    default:
      return state
  }
}

export default sports
