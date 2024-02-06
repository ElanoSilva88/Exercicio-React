import Header from "../../components/header"
import Footer from "../../components/Footer"


function Home(){
    return (
        <>
        <Header />
        <section className="container">
          <div className="apresentacao">
            <p>Olá sou <br />
            <span>Elano Silva</span> <br />
            Dev Full Stack</p>
            <button className="btn btn-red">Saiba mais sobre mim</button>
          </div>
          <figure>
            <img className="img-home" src="/developer-red.svg" alt="Imagem de Home"/>
          </figure>
        </section>
        <Footer />
        </>
    )
}


export default Home
