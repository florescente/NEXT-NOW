import Menu from './menu'
import Muu from './muu'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Muu />
      <Menu />
      <main>{children}</main>
    </>
  )
}
