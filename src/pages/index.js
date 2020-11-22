import React from "react"

import index from "../../static/styles/pages/index.css"
import global from "../../static/styles/global.css"

import Brand from "../components/brand"
import Header from "../components/header"
// import { Link } from "gatsby"

export default function Home() {
  return (
    <div className="index">
      <style src={global} />
      <style src={index} />
      <Header />
      <section className="brand">
        <div className="brand">
          <h1 className="brand center shake">The Silly Site</h1>
          <Brand
            className="center img brand shake flip"
            width="100%"
            height="500px"
          />
        </div>
      </section>
      <section className="gatsby-logo">
        <a
          href="https://www.gatsbyjs.com"
          target="_blank"
          className="gatsby-logo-desc"
          rel="noreferrer"
        >
          Built with GatsbyJS, master of Javascript frameworks.
        </a>
      </section>
      <br />
      <p style={{ textAlign: "center" }}>
        Scroll down - I have a nice button for you!
      </p>
      <br />
      <br />
      <br />
      <button className="glow-on-hover" type="button">
        Click this button for something fun to happen!
      </button>
    </div>
  )
}
