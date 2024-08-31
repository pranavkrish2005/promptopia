"use client"

import { SessionProvider } from "next-auth/react"
// all the providers go in the layout.js file
const Provider = ({ children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider
