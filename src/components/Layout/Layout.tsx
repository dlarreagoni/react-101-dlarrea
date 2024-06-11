import { FC, PropsWithChildren } from 'react'
import css from '../TaskCard/Task.module.css'
import Header from './Header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={css.card}>
      <Header title="Code learning" />
      <main>{children}</main>
      <footer>
        <h3>Pie de pagina</h3>
      </footer>
    </div>
  )
}

export default Layout
