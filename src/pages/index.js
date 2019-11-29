import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import AboutPage from "../components/about"
import ProjectCard from "../components/projectCard"
import SEO from "../components/seo"
import JSONbuildtime from "./json-at-buildtime"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h5
      style={{
        padding: `7rem 0rem`,
        fontSize: `2.5rem`,
        lineHeight: `1.5`,
        fontWeight: `bold`,
      }}
    >
      Hello👋🏼, I’m{" "}
      <span
        style={{
          color: ` #5393fe`,
        }}
      >
        Sehbaz
      </span>
      , a front-end developer based in{" "}
      <span style={{ color: `#f46b3f` }}>Leicester</span>. I focus on delivering
      optimal solutions to design and code problems that enhances the user’s
      <span style={{ color: `#17b1b1` }}> experience</span>.
    </h5>
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
    <div>
      <Link to="/work">
        {" "}
        <h5>See more work</h5>
      </Link>
    </div>
    <AboutPage></AboutPage>
    <JSONbuildtime></JSONbuildtime>
  </Layout>
)

export default IndexPage
