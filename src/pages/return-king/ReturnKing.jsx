import Header from "../../componets/Header/Header";
import frodo from '../../img//actors/wood.jpeg';
import merri from '../../img//actors/dominic.jpeg';
import pippin from '../../img//actors/billy.jpeg';
import sam from '../../img//actors/sean.jpeg';
import gandalf from '../../img//actors/ian.jpeg';
import aragorn from '../../img//actors/viggo.jpeg';
import legolas from '../../img//actors/orlando.jpeg';
import gimli from '../../img//actors/john.jpeg';
import theoden from '../../img//actors/theoden.webp';
import play from '../../img/fellowship/play.svg';
import trailerImg from '../../img/return-king/return-wallper.jpeg';
import star from '../../img/fellowship/star.svg';
import fellowship from '../../img/two-towers/felllowship-wallper.jpg';
import twoTowers from '../../img/movie/two-towers-walpper.webp'; 
import Footer from "../../componets/Footer/Footer";
import return1 from "../../img/return-king/return1.jpg";
import return2 from "../../img/return-king/return2.jpg";
import return3 from "../../img/return-king/return3.jpg";
import return4 from "../../img/return-king/return4.jpg";
import return5 from "../../img/return-king/return5.jpg";
import return6 from "../../img/return-king/return6.jpg";
import return7 from "../../img/return-king/return7.png";
import return8 from "../../img/return-king/return8.jpg";
import return9 from "../../img/return-king/return9.jpg";
import { Link } from "react-router-dom";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import { useEffect, useState } from "react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "@fancyapps/ui/dist/fancybox.css";



const actors = [
    {
       id: 1,
       img: frodo,
       name: "Elijah Wood",
       character: "Frodo Baggins",
       info: "https://en.wikipedia.org/wiki/Elijah_Wood"
    },
    {
       id: 2,
       img: merri,
       name: "Dominic Monaghan",
       character: "Meriadoc Brandybuck",
       info: "https://en.wikipedia.org/wiki/Dominic_Monaghan"
    },
    {
       id: 3,
       img: pippin,
       name: "Billy Boyd",
       character: "Peregrin Took",
       info: "https://en.wikipedia.org/wiki/Billy_Boyd_(actor)"
    },
    {
        id: 4,
        img: sam,
        name: "Sean Astin",
        character: "Samwise Gamgee",
        info: "https://en.wikipedia.org/wiki/Sean_Astin"
    },
    {
        id: 5,
        img: gandalf,
        name: "Ian McKellen",
        character: "Gandalf",
        info: "https://en.wikipedia.org/wiki/Ian_McKellen"
    },
    {
        id: 6,
        img: aragorn,
        name: "Viggo Mortensen",
        character: "Aragorn II Elessar",
        info: "https://en.wikipedia.org/wiki/Viggo_Mortensen"
    },
    {
        id: 7,
        img: legolas,
        name: "Orlando Bloom",
        character: "Legolas",
        info: "https://en.wikipedia.org/wiki/Orlando_Bloom"
    },
    {
        id: 8,
        img: gimli,
        name: "John Rhys-Davies",
        character: "Gimli",
        info: "https://en.wikipedia.org/wiki/John_Rhys-Davies"
    },
    {
        id: 9,
        img: theoden,
        name: "Bernard Hill",
        character: "Théoden",
        info: "https://en.wikipedia.org/wiki/Bernard_Hill"
    }
  ];

const gallery = [
    {id: 1, img: return1},
    {id: 2, img: return2},
    {id: 3, img: return3},
    {id: 4, img: return4},
    {id: 5, img: return5},
    {id: 6, img: return6},
    {id: 7, img: return7},
    {id: 8, img: return8},
    {id: 9, img: return9}
];
 

const TwoTowers = () => {

    const [movie, setMovie] = useState();
    const request = async ()=> {
    const response = await fetch (`https://the-one-api.dev/v2/movie`,  {headers:{Authorization: "Bearer IJK1dkd6deE7Z0m2uUB4"}} );
    const data = await response.json();
    setMovie(data.docs);
}
useEffect(() => {
   
    request();
}, []);

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

    return (
        <div>
            <Header/>
            <main className="main">
                <section className="return-king">
                        <div className="container">
                            <div className="head-holder">
                                <h1  className="title">
                                    The Return of the King
                                </h1>
                            </div>
                            <div className="link-holder">
                                <a href="#fellowship" className="link">
                                    More info<span></span>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="about-fellowship" id="fellowship">
                        <div className="section-container">
                            <div className="block-holder">
                                <div className="block-cast">
                                    <div className="title-holder-main">
                                        <h2 className="main-title">cast</h2>
                                    </div>
                                {
                                    actors.map(actor => (
                                        <div className="block-actors" key={actor.id}>
                                            <div className="img-holder">
                                                <img src={actor.img} alt="image description" className="img-actor" />
                                            </div>
                                            <div className="text-block">
                                                <div className="text-holder-wraper">
                                                    <div className="text-holder">
                                                        <p className="text name">
                                                            {actor.name}
                                                        </p>
                                                    </div>
                                                    <div className="text-holder">
                                                        <p className="text character">
                                                            {actor.character}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="watch-link-holder">
                                                    <a href={actor.info} target="_blank" className="watch-link">
                                                        More info &#8594;
                                                    </a>
                                                </div>
                                            </div>
                                         </div>
                                    ))}
                                </div>
                                
                                <div className="block-info">
                                    <div className="wraper-trailer-raiting">
                                        <div className="trailer-block">
                                            <div className="title-holder-main">
                                                <h2 className="main-title">trailer</h2>
                                            </div>
                                            <div className="img-holder trailer">
                                                <img src={trailerImg} alt="image description" className="img-actor" />
                                                <div className="watch-link-holder">
                                                    <a href="https://youtu.be/zckJCxYxn1g" className="watch-link" data-fancybox>
                                                        Watch trailer
                                                        <img src={play} alt="play" className="play" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="raiting-block">
                                            <div className="title-holder-main">
                                                <h2 className="main-title">raiting IMDB</h2>
                                            </div>
                                            <div className="raiting-holder">
                                                <img src={star} alt="star" className="img-star" />
                                                <div className="raiting-text-holder">
                                                        <p className="raiting-text1">9</p>
                                                        <p className="raiting-text2">/10</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="line-story">
                                        <div className="title-holder-main">
                                            <h2 className="main-title">story line</h2>
                                        </div>
                                        <div className="text-holder">
                                                <p className="text">The culmination of nearly 10 years' work and conclusion to Peter Jackson's
                                                 epic trilogy based on the timeless J.R.R. Tolkien classic, "The Lord of the Rings: The Return 
                                                 of the King" presents the final confrontation between the forces of good and evil fighting for 
                                                 control of the future of Middle-earth. Hobbits Frodo and Sam reach Mordor in their quest to destroy 
                                                 the `one ring', while Aragorn leads the forces of good against Sauron's evil army at the stone city 
                                                 of Minas Tirith.
                                                </p>
                                        </div>
                                    </div>
                                    {movie && (
                                        <div className="about-fellowship-movie">
                                        <div className="title-holder-main">
                                            <h2 className="main-title">About</h2>
                                        </div>
                                        <ul className="about-movie-list">
                                            <li className="movie-item">
                                                <span className="info-about">Academy Award Nominations:  </span>
                                                <span className="awards">{movie[7].academyAwardNominations}</span>
                                            </li>
                                            <li className="movie-item"> 
                                                <span className="info-about">Academy Award Wins: </span>
                                                <span className="awards">{movie[7].academyAwardWins}</span>
                                            </li>
                                            <li className="movie-item">
                                                <span className="info-about">Box Office Revenue: </span>
                                                <span className="awards">&#36; {movie[7].boxOfficeRevenueInMillions} millions</span>
                                            </li>
                                            <li className="movie-item">
                                                <span className="info-about">Budget: </span>
                                                <span className="awards">&#36; {movie[7].budgetInMillions} millions</span>
                                            </li>
                                            <li className="movie-item">
                                                <span className="info-about">Runtime: </span> 
                                                <span className="awards">{movie[7].runtimeInMinutes} minutes</span>
                                            </li>
                                        </ul>

                                    </div>
                                    )}
                                    <div className="other-movies">
                                        <div className="title-holder-main">
                                            <h2 className="main-title">other parts</h2>
                                        </div>
                                        <div className="other-wraper">
                                            <div className="first-movie">
                                                <div className="img-holder">
                                                    <img src={fellowship} alt="image description" className="img-other" />
                                                </div>
                                                <div className="watch-link-holder">
                                                    <Link to="/fellowship" className="watch-link" >
                                                        More info &#8594;
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="second-movie">
                                                <div className="img-holder">
                                                    <img src={twoTowers} alt="image description" className="img-other" />
                                                </div>
                                                <div className="watch-link-holder">
                                                    <Link to="/two-towers" className="watch-link" >
                                                        More info &#8594;
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="title-holder-main">
                                <h2 className="main-title">gallery</h2>
                            </div>
                            <Slider {...settings}>
                            {
                                gallery.map(imgs => (
                                    <div className="slider-holder" key={imgs.id}>
                                        <img src={imgs.img} className="gallery" alt="gallery"/>
                                    </div>
                                    ))}
                            </Slider>
                        </div>
                    </section>
            </main>
            <Footer/>
        </div>
    )
}

export default TwoTowers;
