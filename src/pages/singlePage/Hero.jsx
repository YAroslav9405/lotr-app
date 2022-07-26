import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "../../componets/Header/Header";
import Footer from "../../componets/Footer/Footer";
import React from 'react';
import Select from 'react-select';





const Hero = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState();
    const [quotes, setQuote] = useState();
    const [query, setQuery] = useState("");
    const [select, setSelect] = useState();
    

    const options = [
        { value: undefined, label: 'all' },
        { value: '5cd95395de30eff6ebccde5c', label: 'The Fellowship of the Ring' },
        { value: '5cd95395de30eff6ebccde5b', label: 'Two Towers' },
        { value: '5cd95395de30eff6ebccde5d', label: 'The Return of the King' }
      ]
    
    const request = async ()=> {
        const response = await fetch (`https://the-one-api.dev/v2/character/${id}`,  {headers:{Authorization: "Bearer IJK1dkd6deE7Z0m2uUB4"}} );
        const data = await response.json();
        setCharacter(data.docs);
    }
    const quoteRequest = async ()=> {
        const response = await fetch (`https://the-one-api.dev/v2/character/${id}/quote`,  {headers:{Authorization: "Bearer IJK1dkd6deE7Z0m2uUB4"}} );
        const data = await response.json();
        setQuote(data.docs);
    }
    useEffect(() => {
        quoteRequest();
        request();
    }, [id]);

    const renderDialog = () => {
        const filterDialog = quotes.filter(quote=>!select ? true : quote.movie === select).filter(quote=>quote.dialog.toLowerCase().includes(query.toLowerCase()));
        if (filterDialog.length > 0 ) {
            return (
                <div>
                    {filterDialog.map(quote => (
                        <div className="first-dialog" key={quote.id}>
                            <div>{(() => {
                                switch(true) {
                                    case(quote.movie === "5cd95395de30eff6ebccde5c"): 
                                    return <div className="movie-holder">
                                                <p className="movie-text">
                                                    <span className="quote-span">
                                                        Movie: 
                                                    </span>
                                                    The Fellowship of the Ring
                                                </p>
                                            </div>;

                                    case(quote.movie === "5cd95395de30eff6ebccde5b"): 
                                    return  <div className="movie-holder">
                                                <p className="movie-text">
                                                    <span className="quote-span">
                                                        Movie: 
                                                    </span>
                                                    Two Towers
                                                </p>
                                            </div>;

                                    default:     
                                    return <div className="movie-holder">
                                                <p className="movie-text">
                                                    <span className="quote-span">
                                                        Movie: 
                                                    </span>
                                                    The Return of the King
                                                </p>
                                            </div>;
                                        }
                                    })()}
                            </div>
                        <div className="dialog-holder">
                             <p className="movie-text">
                                 <span className="quote-span">
                                    Dialog: 
                                 </span> 
                                 {quote.dialog}
                            </p>
                        </div>
                    </div>


                    ))}
                </div>
            )} else {
                return (
                    <div className="results-holder">
                        <p>No results</p>
                    </div>
                )
            }
        } 
    return(
        <div>
            <Header/>
            <main className="main">
                <section className="heroes">
                    <div className="section-container">
                        <div className="hero-holder">
                            {character && (
                                <div className="about-hero">
                                    <div className="title-holder-main">
                                        <h2 className="main-title">short info</h2>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            <span className="main-text">Name: </span>
                                            {character[0].name}
                                        </p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            <span className="main-text">Race: </span>
                                            {character[0].race}
                                        </p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            <span className="main-text">Gender: </span>
                                            {character[0].gender}
                                        </p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            <span className="main-text">Death: </span>
                                            {character[0].death}
                                        </p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            <span className="main-text">Birth: </span>
                                            {character[0].birth}
                                        </p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            <span className="main-text">Hair: </span>
                                            {character[0].hair}
                                        </p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            <span className="main-text">Height: </span>
                                            {character[0].height}
                                        </p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            <span className="main-text">Realm: </span>
                                            {character[0].realm}
                                        </p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            <span className="main-text">Spouse: </span>
                                            {character[0].spouse}
                                        </p>
                                    </div>
                                    <div className="watch-link-holder">
                                        <a href={character[0].wikiUrl} target="_blank" className="watch-link">
                                            More info &#8594;
                                        </a>
                                    </div>
                                </div>
                            )}
                            {quotes && (
                                <div className="quote-holder">
                                    <div className="title-holder-main">
                                        <p className="main-title">quotes</p>
                                    </div>
                                    <Select 
                                        className="select-movie"
                                        options={options} 
                                        placeholder="Select movie" 
                                        onChange={(item) => setSelect(item.value)}
                                        theme={(theme) => ({
                                            ...theme,
                                            borderRadius: 6,
                                            colors: {
                                                ...theme.colors,
                                                primary25: '#c0c5ce',
                                                primary: 'black',
                                                primary50: '#c0c5ce',
                                            },
                                            })}
                                    />
                                    <div className="input-holder">
                                        <label className="label" htmlFor="input">search by word or phrase: </label>
                                        <input 
                                            type="text"
                                            id="input"
                                            className="search" 
                                            onChange={(e) => setQuery(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            {renderDialog()}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Hero;

