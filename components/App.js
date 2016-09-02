module.exports = React => ({ state }) => {
  const { Home, Blog } = require('../containers')(React)
  if (state.route === 'home') {
    return <Home state={state} />
  } else if (state.route === 'blog') {
    return <Blog state={state} />
  } else {
    return <Home state={state} />
  }
}
