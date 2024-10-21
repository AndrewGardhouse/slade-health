import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/Layout/Layout'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <html data-theme="emerald" />
      <title>Home Page</title>
    </>
  )
}
