module.exports = React => ({ state }) => {
  return (
    <article className="dib dib-ns bg-white mw5 ba b--black-10 mv4 mh3">
      <div className="pv2 ph3">
         <h1 className="f6 ttu tracked">Happy Co.</h1>
      </div>
      <img src="http://lorempixel.com/400/200/animals/" className="w-100 db" alt="Animal" />
      <div className="pa3">
        <a href="#" className="link dim lh-title">What it takes to be happy...</a>
        <small className="gray db pv2"> AMP - <time>6 hours ago</time></small>
      </div>
    </article>
  )
}
