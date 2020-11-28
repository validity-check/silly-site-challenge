import React from "react"

import buttonCSS from "./cool-button.css"

export default function CoolButton() {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href={buttonCSS} />
      <button className="glow-on-hover" type="button">
        Click this button for something fun to happen!
      </button>
    </div>
  )
}
