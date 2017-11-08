const getSports = (db) => {
  return db('sports').select('*').orderBy('sport_name')
}

const getSportById = (sportId, db) => {
  return db('sports')
    .where('sport_id', sportId)
    .first()
}

module.exports = {
  getSports,
  getSportById
}
