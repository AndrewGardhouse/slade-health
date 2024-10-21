import React, { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="h-[calc(100vh-68px)]">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
