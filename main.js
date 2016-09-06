const React = require('react')
const ReactDOM = require('react-dom')
const pin = require('linchpin')
const { fromEvent } = require('most')
const { App } = require('./components')(React)
const $app = document.getElementById('app')
const event$ = fromEvent('click', $app)
                .tap(e => e.preventDefault())

const initialState = {
  route: 'blog',
  event$: event$
}
pin.on('repaint', (state) => render(state))

render(initialState)

function render(state) {
  ReactDOM.render(<App state={state} />, $app)
}
