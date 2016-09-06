const pin = require('linchpin')

module.exports = React => ({ state }) => {
  state.event$
    .filter((e) => e.target.classList.contains('nav'))
    .subscribe({
      next(e) {
        state.route = e.target.getAttribute('rel')
        pin.emit('repaint', state)
      },
      complete(e) { console.log('yo yo yo') },
      error(err) { console.log(err) }
    })
  return (
    <nav className="bg-dark-green fixed-ns db dt-l w-100 border-box pa3 ph5-l">
      <a className="db dtc-l v-mid white-60 link dim w-100 w-25-l tc tl-l mt-7 mt-0-ns mb2 mb0-l" href="#" title="Home">
        <img src="http://lorempixel.com/400/200/abstract" className="dib w2 h2 br-100" alt="Site Name" />
      </a>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <a className="nav link dim white-60 f6 f5-l dib mr3 mr4-l" href="#" rel="home" title="Home">Home</a>
        <a className="nav link dim white-60 f6 f5-l dib mr3 mr4-l" href="#" rel="howitworks" title="How it Works">How it Works</a>
        <a className="nav link dim white-60 f6 f5-l dib mr3 mr4-l" href="#" rel="blog" title="Blog">Blog</a>
        <a className="nav link dim white-60 f6 f5-l dib mr3 mr4-l" href="#" rel="press" title="Press">Press</a>
        <a className="nav link dim white-60 f6 f5-l dib" href="#" rel="contact" title="Contact">Contact</a>
      </div>
    </nav>
  )
}
