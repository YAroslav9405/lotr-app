import Footer from "../../componets/Footer/Footer";
import Header from "../../componets/Header/Header";
import frodo from "../../img/characters/light/frodo.jpeg";
import sam from "../../img/characters/light/sam.webp";
import merry from "../../img/characters/light/merry.webp";
import pippin from "../../img/characters/light/pippin.webp";
import gandalf from "../../img/characters/light/gandalf.webp";
import aragorn from "../../img/characters/light/aragorn.webp";
import legolas from "../../img/characters/light/legolas.webp";
import gimli from "../../img/characters/light/gimli.webp";
import arwen from "../../img/characters/light/arwen.webp";
import sauron from "../../img/characters/dark/sauron.webp";
import balrog from "../../img/characters/dark/balrog.jpeg";
import witchKing from "../../img/characters/dark/witch-king.webp";
import saruman from "../../img/characters/dark/saruman.webp";
import mouthSauron from "../../img/characters/dark/mouth_of_sauron.webp";
import spider from "../../img/characters/dark/shelob.webp";
import deadKing from "../../img/characters/dark/kingofthedead.webp";
import uruk from "../../img/characters/dark/shagrat.webp";
import orck from "../../img/characters/dark/lugdush.webp";
import { useEffect, useState } from "react";
import { createContext } from "react";
import ReactSwitch from "react-switch";
import { Link } from "react-router-dom";
import Modal from "react-modal/lib/components/Modal";


export const ThemeContext = createContext(null);

const Characters = () => {

    const [character, setCharacter] = useState();
    const request = async ()=> {
    const response = await fetch (`https://the-one-api.dev/v2/character`,  {headers:{Authorization: "Bearer IJK1dkd6deE7Z0m2uUB4"}} );
    const data = await response.json();
    setCharacter(data.docs);
}
useEffect(() => {
       
    request();
}, []);

const [theme, setTheme] = useState("light");
const toggleTheme = () => {
    setTheme((curr )=> (curr === "light" ? "dark" : "light"))
}

const [modalIsOpen, setIsOpen] = useState(false);
const [query, setQuery] = useState("");


const openModal = () => {
    setIsOpen(true);
}
const closeModal = () => {
    setIsOpen(false);
}

const renderResults = () => {
    if (!query.length) {
        return null
    }
    const filterCharacter = character.filter(character=>character.name.toLowerCase().includes(query.toLowerCase()));
    if (filterCharacter.length > 0 ) {
        return (
            <div>
                 {filterCharacter.map(hero=> (
                <div key={hero._id} className="hero-search">
                    <div className="text-holder">
                        <p className="text">
                            <span className="main-text new">Name: </span>
                                {hero.name}
                        </p>
                    </div>
                    <div className="text-holder">
                        <p className="text">
                            <span className="main-text new">Race: </span>
                                 {hero.race}
                        </p>
                    </div>
                    <div className="text-holder">
                        <p className="text">
                            <span className="main-text new">Gender: </span>
                                {hero.gender}
                        </p>
                    </div>
                    <div className="text-holder">
                        <p className="text">
                            <span className="main-text new">Death: </span>
                            {hero.death}
                        </p>
                    </div>
                    <div className="text-holder">
                        <p className="text">
                            <span className="main-text new">Birth: </span>
                                {hero.birth}
                        </p>
                    </div>
                    <div className="text-holder">
                        <p className="text">
                            <span className="main-text new">Hair: </span>
                                {hero.hair}
                        </p>
                    </div>
                    <div className="text-holder">
                        <p className="text new">
                            <span className="main-text">Height: </span>
                                {hero.height}
                        </p>
                    </div>
                    <div className="text-holder">
                        <p className="text">
                            <span className="main-text new">Realm: </span>
                                {hero.realm}
                        </p>
                    </div>
                    <div className="text-holder">
                        <p className="text">
                            <span className="main-text new">Spouse: </span>
                                {hero.spouse}
                        </p>
                    </div>
                    <div className="watch-link-holder">
                        <a href={hero.wikiUrl} target="_blank" className="watch-link">
                            More info &#8594;
                        </a>
                    </div>
                </div>
                ))} 
            </div>
        )
    } else {
        return (
            <div className="results-holder">
                <p>No results</p>
            </div>
        
        )
    }

}

    return (
        <div>
            <Header/>
            <main className="main">
                <section className="characters">
                    <div className="container">
                        <div className="link-holder">
                            <a href="#movies" className="link">
                                Scroll to Movies<span></span>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="about-characters">
                    <div className="section-container">
                        <div className="title-holder-main">
                            <h2 className="main-title">characters</h2>
                        </div>
                        <div className="switch">
                            <label className="switch-label">{ theme === "light" ? "Light mode" : "Dark mode"}</label>
                            <ReactSwitch onChange={toggleTheme} onColor={'#000000'} checked={theme === "dark"}/>
                        </div>
                        <ThemeContext.Provider value={{theme, toggleTheme}}>
                            {character && (
                                 <div className="hero-holder" id={theme}>
                                 <div className="light-characters">
                                     <div className="col col-1">
                                         <div className="img-holder frodo">
                                             <img src={frodo} alt="image description" className="img-actor" />
                                         </div>
                                             <div className="text-holder frodo">
                                                 <p className="text-name">{character[87].name}</p>
                                             </div>
                                             <div className="watch-link-holder frodo">
                                                 <Link to={`/${character[87]._id}`} className="watch-link">
                                                     More info &#8594;
                                                 </Link>
                                             </div>
                                     </div>
                                     <div className="col col-2">
                                         <div className="img-holder">
                                             <img src={sam} alt="image description" className="img-actor" />
                                         </div>
                                             <div className="text-holder">
                                                 <p className="text-name">{character[333].name}</p>
                                             </div>
                                             <div className="watch-link-holder">
                                                 <Link to={`/${character[333]._id}`} className="watch-link">
                                                     More info &#8594;
                                                 </Link>
                                             </div>
                                     </div>
                                     <div className="col col-3">
                                         <div className="img-holder">
                                             <img src={merry} alt="image description" className="img-actor" />
                                         </div>
                                             <div className="text-holder">
                                                 <p className="text-name">{character[190].name}</p>
                                             </div>
                                             <div className="watch-link-holder">
                                                 <Link to={`/${character[190]._id}`} className="watch-link">
                                                     More info &#8594;
                                                 </Link>
                                             </div>
                                     </div>
                                     <div className="col col-4">
                                         <div className="img-holder">
                                             <img src={pippin} alt="image description" className="img-actor" />
                                         </div>
                                             <div className="text-holder">
                                                 <p className="text-name">{character[622].name}</p>
                                             </div>
                                             <div className="watch-link-holder">
                                                 <Link to={`/${character[622]._id}`} className="watch-link">
                                                     More info &#8594;
                                                 </Link>
                                             </div>
                                     </div>
                                     <div className="col col-5">
                                         <div className="img-holder">
                                             <img src={gandalf} alt="image description" className="img-actor" />
                                         </div>
                                             <div className="text-holder">
                                                 <p className="text-name">{character[732].name}</p>
                                             </div>
                                             <div className="watch-link-holder">
                                                 <Link to={`/${character[732]._id}`} className="watch-link">
                                                     More info &#8594;
                                                 </Link>
                                             </div>
                                     </div>
                                     <div className="col col-6">
                                         <div className="img-holder">
                                             <img src={aragorn} alt="image description" className="img-actor" />
                                         </div>
                                             <div className="text-holder">
                                                 <p className="text-name">{character[40].name}</p>
                                             </div>
                                             <div className="watch-link-holder">
                                                 <Link to={`/${character[40]._id}`} className="watch-link">
                                                     More info &#8594;
                                                 </Link>
                                             </div>
                                     </div>
                                     <div className="col col-7">
                                         <div className="img-holder">
                                             <img src={legolas} alt="image description" className="img-actor" />
                                         </div>
                                             <div className="text-holder">
                                                 <p className="text-name">{character[449].name}</p>
                                             </div>
                                             <div className="watch-link-holder">
                                                 <Link to={`/${character[449]._id}`} className="watch-link">
                                                     More info &#8594;
                                                 </Link>
                                             </div>
                                     </div>
                                     <div className="col col-8">
                                         <div className="img-holder">
                                             <img src={gimli} alt="image description" className="img-actor" />
                                         </div>
                                             <div className="text-holder">
                                                 <p className="text-name">{character[355].name}</p>
                                             </div>
                                             <div className="watch-link-holder">
                                                 <Link to={`/${character[355]._id}`} className="watch-link">
                                                     More info &#8594;
                                                 </Link>
                                             </div>
                                     </div>
                                     <div className="col col-9">
                                         <div className="img-holder">
                                             <img src={arwen} alt="image description" className="img-actor" />
                                         </div>
                                             <div className="text-holder">
                                                 <p className="text-name">{character[73].name}</p>
                                             </div>
                                                 <div className="watch-link-holder">
                                                     <Link to={`/${character[73]._id}`} className="watch-link">
                                                         More info &#8594;
                                                     </Link>
                                                 </div>
                                     </div>
                                 </div>
                                 <div className="dark-characters">
                                         <div className="col col-1">
                                             <div className="img-holder frodo">
                                                 <img src={sauron} alt="image description" className="img-actor" />
                                             </div>
                                                 <div className="text-holder frodo">
                                                     <p className="text-name">{character[737].name}</p>
                                                 </div>
                                                 <div className="watch-link-holder frodo">
                                                     <Link to={`/${character[737]._id}`} className="watch-link">
                                                         More info &#8594;
                                                     </Link>
                                                 </div>
                                         </div>
                                         <div className="col col-2">
                                             <div className="img-holder">
                                                 <img src={balrog} alt="image description" className="img-actor" />
                                             </div>
                                                 <div className="text-holder">
                                                     <p className="text-name">{character[853].name}</p>
                                                 </div>
                                                 <div className="watch-link-holder">
                                                     <Link to={`/${character[853]._id}`} className="watch-link">
                                                         More info &#8594;
                                                     </Link>
                                                 </div>
                                         </div>
                                         <div className="col col-3">
                                             <div className="img-holder">
                                                 <img src={witchKing} alt="image description" className="img-actor" />
                                             </div>
                                                 <div className="text-holder">
                                                     <p className="text-name">{character[868].name}</p>
                                                 </div>
                                                 <div className="watch-link-holder">
                                                     <Link to={`/${character[868]._id}`} className="watch-link">
                                                         More info &#8594;
                                                     </Link>
                                                 </div>
                                         </div>
                                         <div className="col col-4">
                                             <div className="img-holder">
                                                 <img src={saruman} alt="image description" className="img-actor" />
                                             </div>
                                                 <div className="text-holder">
                                                     <p className="text-name">{character[736].name}</p>
                                                 </div>
                                                 <div className="watch-link-holder">
                                                     <Link to={`/${character[736]._id}`} className="watch-link">
                                                         More info &#8594;
                                                     </Link>
                                                 </div>
                                         </div>
                                         <div className="col col-5">
                                             <div className="img-holder">
                                                 <img src={uruk} alt="image description" className="img-actor" />
                                             </div>
                                                 <div className="text-holder">
                                                     <p className="text-name">{character[771].name}</p>
                                                 </div>
                                                 <div className="watch-link-holder">
                                                     <Link to={`/${character[771]._id}`} className="watch-link">
                                                         More info &#8594;
                                                     </Link>
                                                 </div>
                                         </div>
                                         <div className="col col-6">
                                             <div className="img-holder">
                                                 <img src={spider} alt="image description" className="img-actor" />
                                             </div>
                                                 <div className="text-holder">
                                                     <p className="text-name">{character[770].name}</p>
                                                 </div>
                                                 <div className="watch-link-holder">
                                                     <Link to={`/${character[770]._id}`} className="watch-link">
                                                         More info &#8594;
                                                     </Link>
                                                 </div>
                                         </div>
                                         <div className="col col-7">
                                             <div className="img-holder">
                                                 <img src={mouthSauron} alt="image description" className="img-actor" />
                                             </div>
                                                 <div className="text-holder">
                                                     <p className="text-name">{character[753].name}</p>
                                                 </div>
                                                 <div className="watch-link-holder">
                                                     <Link to={`/${character[753]._id}`} className="watch-link">
                                                         More info &#8594;
                                                     </Link>
                                                 </div>
                                         </div>
                                         <div className="col col-8">
                                             <div className="img-holder">
                                                 <img src={deadKing} alt="image description" className="img-actor" />
                                             </div>
                                                 <div className="text-holder">
                                                     <p className="text-name">{character[559].name}</p>
                                                 </div>
                                                 <div className="watch-link-holder">
                                                     <Link to={`/${character[559]._id}`} className="watch-link">
                                                         More info &#8594;
                                                     </Link>
                                                 </div>
                                         </div>
                                         <div className="col col-9">
                                             <div className="img-holder">
                                                 <img src={orck} alt="image description" className="img-actor" />
                                             </div>
                                                 <div className="text-holder">
                                                     <p className="text-name">{character[895].name}</p>
                                                 </div>
                                                 <div className="watch-link-holder">
                                                     <Link to={`/${character[895]._id}`} className="watch-link">
                                                         More info &#8594;
                                                     </Link>
                                                 </div>
                                         </div>
                                 </div>
                                 <div className="button-holder">
                                     <button onClick={openModal} className="hero-button">More Characters</button>
                                 </div>
                                      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} >
                                         <span className="close" onClick={closeModal}></span>
                                         <div className="modal-context">
                                            <div className="input-holder">
                                            <label className="label" htmlFor="input-modal">input character name: </label>
                                            <input 
                                                type="text"
                                                id="input-modal"
                                                className="search"
                                                onChange={(e) => setQuery(e.target.value)} 
                                                />
                                            </div>
                                                {renderResults()}
                                         </div>
                                     </Modal>
                             </div>
                             
                            )}
                           
                        </ThemeContext.Provider>
                        
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Characters;




