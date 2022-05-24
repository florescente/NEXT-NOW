import React from 'react'
import Menu from './menu'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  )
}
