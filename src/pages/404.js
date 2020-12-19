import React from "react"

import Header from "../components/header/header"

export default function fourzerofour() {
  return (
    <div>
      <Header />
      <br />
      <h1>OOPS!</h1>
      <p>That page could not be found...</p>
      <p className="upside-down right">
        But here's some upside down text for fun{" "}
        <span role="img" aria-label="smile emoji">
          😁
        </span>
        ...
      </p>
      <br />
      <hr />
      <br />
      <p>You can use the header at the top to get to where you need to be.</p>
    </div>
  )
}
