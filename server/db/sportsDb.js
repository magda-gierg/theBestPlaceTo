module.exports = {
  getSports
}


const getSports = (db) => {
  return db('sports')
}
