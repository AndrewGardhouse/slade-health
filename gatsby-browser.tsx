import React from 'react'
import Layout from './src/components/Layout/Layout'
import './src/styles/global.css'

const wrapRootElement = ({ element }) => {
  return (
    <Layout>
      {element}
    </Layout>
  )
}