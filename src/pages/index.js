import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      style={{
        padding: `7rem 0rem`,
        fontSize: `2rem`,
      }}
    >
      I’m your new Gatsby starter. I’m here to help you showcase your work, your
      thoughts, and anything else! I’m hooked up to Prismic and deployed with
      Netlify. 🎉
    </h1>
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
  </Layout>
)

export default IndexPage
