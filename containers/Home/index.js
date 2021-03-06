module.exports = React => ({ state }) => {
  const { Header, Footer, Card, Nav, Banner } = require('../../components')(React)
  return (
    <div>
      <Nav state={state} />
      <Header state={state} />
      <section className="bg-white-60 mw5 mw9-ns center pa3 ph5-ns">
        <Banner state={state} />
            <Card state={state} />
            <Card state={state} />
            <Card state={state} />
            <Card state={state} />
            <Card state={state} />
            <Card state={state} />
        <Footer state={state} />
      </section>
    </div>

  )
}
