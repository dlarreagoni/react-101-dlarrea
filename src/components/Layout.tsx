import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren> = ({children}) => {
    return <div>
        <header>Cabecera</header>
        <main>{children}</main>
        <footer>Pie de pagina</footer>
        </div>
}

export default Layout