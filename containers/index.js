module.exports = React => {
  return {
    Home: require('./Home')(React),
    Blog: require('./Blog')(React)
  }
}
