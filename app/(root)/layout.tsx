import Header from '@/components/ui/Header'
import React from 'react'

type LayoutProps = {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main className="root-container">
            <div className="mx-auto max-w-7xl">
                <Header />
                <div className="mt-20 pb-20">{children}</div>
            </div>
        </main>
    )
}

export default Layout
