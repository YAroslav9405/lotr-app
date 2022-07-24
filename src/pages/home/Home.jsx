import Header from "../../componets/Header/Header";
import headImg from '../../img/the-lord-of-the-rings.svg'



const Home = () => {
    return (
        <div>
            <Header/>
            <section className="hero-section">
                <div className="head-holder">
                    <img src={headImg} alt="name" className="title-img" width="700px" />
                </div>
                <div className="link-holder">
                    <a href="#choose" className="link">
                        Scroll Down<span></span>
                    </a>
                </div>
            </section>
            <section id="choose">
                    <h1>jkhkhkh</h1>
            </section>
        </div>
    )
}

export default Home;