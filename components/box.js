module.exports = (React) => ({ state, idx }) => {

  if(idx % 2 === 0) {
  return (
    <div className="cf w-100 w-100-ns pt0 pb0 pv2-m pv2-ns">

      <div className="dib w-40-ns v-mid pa4">
        <p className="f4 lh-copy">
          For desktop, this text is vertically aligned middle, no matter what the height of the image is.
          On mobile, this is a paragraph below an image.
        </p>
        <p className="f4 lh-copy">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="dib w-60-ns v-mid-ns">
        <img src="http://lorempixel.com/400/200/technics" alt="A bright blue sky" className="w-100 w-100-ns" />
      </div>
    </div>
  )
} else {
  return (
    <div className="cf w-100 w-100-ns pt0 pb0 pv2-m pv2-ns">
    <div className="dib w-60-ns v-mid-ns">
      <img src="http://lorempixel.com/400/200/technics" alt="A bright blue sky" className="w-100 w-100-ns" />
    </div>
    <div className="dib w-40-ns v-mid pa4">
      <p className="f4 lh-copy">
        For desktop, this text is vertically aligned middle, no matter what the height of the image is.
        On mobile, this is a paragraph below an image.
      </p>
      <p className="f4 lh-copy">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
  )
}
}
