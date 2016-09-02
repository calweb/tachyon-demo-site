module.exports = (React) => {
  return {
    App: require('./App')(React),
    Banner: require('./Banner')(React),
    Card: require('./Card')(React),
    Footer: require('./Footer')(React),
    Header: require('./Header')(React),
    Nav: require('./Nav')(React),
    Post: require('./Post')(React),
    PostList: require('./PostList')(React)
  }
}
