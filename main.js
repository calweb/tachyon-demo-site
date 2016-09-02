const React = require('react')
const ReactDOM = require('react-dom')
const pin = require('linchpin')
const { App } = require('./components')(React)

const initialState = {
  route: 'home'
}
pin.on('repaint', (state) => render(state))

render(initialState)

function render(state) {
  ReactDOM.render(<App state={state} />, document.getElementById('app'))
}
