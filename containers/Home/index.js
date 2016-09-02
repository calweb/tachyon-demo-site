module.exports = React => ({ state }) => {
  const { Header, Footer, Card } = require('../../components')(React)
  return (
    <section className="mw5 mw8-ns center pa3 ph5-ns">
      <Header state={state} />

        <Card state={state} />
        <Card state={state} />
        <Card state={state} />

      <Footer state={state} />
    </section>
  )
}
