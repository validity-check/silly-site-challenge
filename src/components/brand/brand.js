import React from "react"
import favicon from "../../../static/favicon.svg"

export default function Brand(props) {
  return (
    <div className="brandComponent">
      <img
        src={favicon}
        height={props.height}
        width={props.width}
        alt="The Silly Site logo"
      ></img>
      <style>{props.style}</style>
    </div>
  )
}
