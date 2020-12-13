import React from "react"

import headerCSS from "./header.css"

import { Link } from "gatsby"

import Brand from "../brand/brand"

export default function Header(props) {
  return (
    <div className="header">
      <style src={headerCSS} />
      <header>
        <nav>
          <Link to="/" activeClassName="active" className="link">
            <Brand height="100%" width="50px" />
          </Link>
          <ul>
            <li>
              <Link to="/upside-down" activeClassName="active" className="link">
                <h1 className="upside-down">Home</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
