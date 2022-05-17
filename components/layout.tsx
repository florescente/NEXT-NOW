import Muu from './muu'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Muu />
      <main>{children}</main>
    </>
  )
}
