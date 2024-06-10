import { FC, PropsWithChildren } from 'react'
import Header from '../Header/Header'

const Layout: FC<PropsWithChildren> = ({children}) => {
    return <div>
        <Header title="Test"/>
        <main>{children}</main>
        <footer><h3>Pie de pagina</h3></footer>
        </div>
}

export default Layout