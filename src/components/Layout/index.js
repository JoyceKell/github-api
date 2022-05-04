export default function Layout({children}){
    return(
        <>
        <section>
            <header>
                Header
                {children}
            </header>
        </section>
        </>
    )
}