import React from "react"
import Layout from "../components/layout"
import ProjectCard from "../components/projectCard"

const WorkPage = () => {
  return (
    <Layout>
      <div>
        <h1 style={{ paddingTop: `2rem` }}>Work</h1>
      </div>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
    </Layout>
  )
}
export default WorkPage
