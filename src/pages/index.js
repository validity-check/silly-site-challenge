import React from "react"
// import { Link } from "gatsby"

import index from "../styles/index.css"

import Brand from "../components/brand/brand"
import Header from "../components/header/header"
// import CoolButton from "../components/cool-button/cool-button"

export default function Home() {
  return (
    <div className="index">
      <style src={index} />
      <Header />
      <section className="flip-fine brand">
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
          className="gatsby-logo-desc link"
          rel="noreferrer"
        >
          Built with GatsbyJS, master of Javascript frameworks.
        </a>
      </section>
      <section className="flip-fine interessant">
        <div>
          <h1 className="cool">Interesting things happen on this website.</h1>
          <p className="center cool">Beautiful yet absolutely absurd.</p>
        </div>
      </section>
      <section className="flip-fine">
        <pre className="fly">
          <code className="fly flip-fine shake">too many thoughts</code>
        </pre>
        <blockquote className="fly-2 flip-fine shake">
          Please don't crash into me
        </blockquote>
        <p className="fly-3">
          <samp>I WILL CRASH INTO YOU ALL</samp>
        </p>
        <kbd className="fly-4">
          <span role="img" aria-label="very scared">
            !!!!!!!!!😨!!!!!!!!!
          </span>
        </kbd>
      </section>
    </div>
  )
}
