import { FC, PropsWithChildren } from 'react'
import Header from './Header/Header'
import './Layout.module.css'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header title="mi titulo" />
      <main>{children}</main>
      <footer>Pie de página</footer>
    </>
  )
}

export default Layout
