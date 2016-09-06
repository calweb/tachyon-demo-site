
module.exports = React => ({ state }) => {
  const { Box, Nav, Footer } = require('../../components')(React)
  return (
    <div>
      <Nav state={state} />
      <section className="bg-white-60 mw5 mw9-ns center pa3 ph5-ns">
        {[0,1,2,3,4,5,6].map((el, idx) => <Box state={state} idx={idx} />)}

        <Footer state={state} />
      </section>
    </div>
  )
}
