import React from "react"

import index from "../../static/styles/pages/index.css"
import global from "../../static/styles/global.css"

import Brand from "../components/brand"
import Header from "../components/header"

export default function Home() {
  return (
    <div className="index">
      <style src={global} />
      <style src={index} />
      <Header />
      <section className="brand">
        <div className="brand">
          <h1 className="brand center shake">The Silly Site</h1>
          <Brand className="center shake" width="100%" height="500px" />
        </div>
      </section>
    </div>
  )
}
