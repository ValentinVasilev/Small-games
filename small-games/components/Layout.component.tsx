import Head from "next/head"
import Footer from "./Footer.component"
import Nav from './Nav.component'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Small Games</title>
      </Head>
      <main style={{ display: 'flex' }}>
        <Nav />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout