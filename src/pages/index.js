import React from "react"
// import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import index from "../styles/index.css"

import Brand from "../components/brand/brand"
import Header from "../components/header/header"
// import CoolButton from "../components/cool-button/cool-button"

export default function Home() {
  return (
    <div className="index">
      <Helmet htmlAttributes={{lang: 'en',}}>
        <meta charSet="utf-8" />
        <title>Silly Site Home</title>
        <link rel="canonical" href="https://sillysitechallenge.gtsb.io" />
        <meta name="description" content="The silliest site on the web, built with Gatsby JS for the Silly Site Challenge." />
        <meta name="robots" content="all" />
      </Helmet>
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
          className="gatsby-logo-desc link"
          rel="noreferrer"
        >
          Built with GatsbyJS, master of Javascript frameworks.
        </a>
      </section>
      <section className="interessant">
        <div>
          <h1 className="cool">Interesting things happen on this website.</h1>
          <p className="center cool">Beautiful yet absolutely absurd.</p>
        </div>
      </section>
      <section>
        <pre className="fly">
          <code className="fly shake">too many thoughts</code>
        </pre>
        <blockquote className="fly-2  shake">
          Please don't crash into me
        </blockquote>
        <p className="fly-3">
          <p>I WILL CRASH INTO YOU ALL</p>
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
