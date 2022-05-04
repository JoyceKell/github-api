import './styles.css'
export default function Layout({children}){
    return(
        <>
        <section>
            <header className="container">
                <h1>My Github Informations:</h1>
                {children}
            </header>
        </section>
        </>
    )
}