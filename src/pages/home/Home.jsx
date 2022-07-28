import Header from "../../componets/Header/Header";
import headImg from '../../img/home/the-lord-of-the-rings.svg'
import frodoImg from '../../img/home/frodo.webp';
import hobbits from '../../img/home/hobbits.jpeg';
import Footer from "../../componets/Footer/Footer";



const Home = () => {
    return (
        <div>
            <Header/>
            <section className="hero-section">
                <div className="container">
                    <div className="head-holder">
                        <img src={headImg} alt="name" className="title-img" width="700px" />
                    </div>
                    <div className="link-holder">
                        <a href="#synopsis" className="link">
                            Scroll Down<span></span>
                        </a>
                    </div>
                </div>
            </section>
            <section id="synopsis" className="synopsis" >
                <div className="section-container">
                    <div className="title-holder-main">
                        <h2 className="main-title">synopsis</h2>
                    </div>
                    
                    <div className="blocks-holder">
                        <div className="title-holder">
                            <h3 className="title-frodo">The Lord of the Rings Trilogy folows the story of a very brave little Hobbit!</h3>
                        </div>
                        <div className="frodo-holder">
                            <img src={frodoImg} className="img-frodo" alt="frodo" width='65'/>
                        </div>
                    </div>
                    <div className="blocks-holder-hobbits">
                        <div className="title-holder-hobbits">
                            <p className="title-hobbits">
                                The Lord of the Rings, fantasy novel 
                                by J.R.R. Tolkien initially published in three parts as The Fellowship of 
                                the Ring (1954), The Two Towers (1955), and The Return of the King (1955). 
                                The novel, set in the Third Age of Middle-earth, formed a sequel to Tolkien’s The 
                                Hobbit (1937) and was succeeded by his posthumous The Silmarillion (1977). The Lord 
                                of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save 
                                their world from consummate evil. Its many worlds and creatures were drawn from Tolkien’s 
                                extensive knowledge of philology and folklore.
                            </p>
                        </div>
                        <div className="frodo-holder">
                            <img src={hobbits} className="img-frodo" alt="image-description" width='65'/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Home;