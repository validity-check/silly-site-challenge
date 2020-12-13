import React from "react"

import upsideDownCss from "../styles/upside-down.css"

import Home from "./index"

export default function UpsideDown() {
  return (
    <div className="upside-down">
      {Home()}
      <style src={upsideDownCss} />
    </div>
  )
}
