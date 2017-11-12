const getPlaces = (db) => {
  return db('places').select('*').orderBy('place_name')
}

const getPlaceById = (placeId, db) => {
  return db('places')
    .where('place_id', placeId)
    .first()
}

module.exports = {
  getPlaces,
  getPlaceById
}
