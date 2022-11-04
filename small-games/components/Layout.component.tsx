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
      <div style={{ display: 'flex' }}>
        <Nav />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout