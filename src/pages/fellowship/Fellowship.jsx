import Header from "../../componets/Header/Header";
import frodo from '../../img//actors/wood.jpeg';
import merri from '../../img//actors/dominic.jpeg';
import pippin from '../../img//actors/billy.jpeg';
import sam from '../../img//actors/sean.jpeg';
import gandalf from '../../img//actors/ian.jpeg';
import aragorn from '../../img//actors/viggo.jpeg';
import legolas from '../../img//actors/orlando.jpeg';
import gimli from '../../img//actors/john.jpeg';
import boromir from '../../img//actors/sean-bean.jpeg';
import play from '../../img/fellowship/play.svg';
import trailerImg from '../../img/fellowship/fellowship gendalf.jpeg';
import star from '../../img/fellowship/star.svg';
import twoTowers from '../../img/movie/two-towers-walpper.webp';
import returnKing from '../../img/movie/return-wallper.jpeg'; 
import Footer from "../../componets/Footer/Footer";
import fellow1 from "../../img/fellowship/felow1.jpeg";
import fellow2 from "../../img/fellowship/fellow2.jpeg";
import fellow3 from "../../img/fellowship//felow3.webp";
import fellow4 from "../../img/fellowship/fellow4.jpg";
import fellow5 from "../../img/fellowship/felow6.jpg";
import fellow6 from "../../img/fellowship/felow7.jpg";
import fellow7 from "../../img/fellowship/felow8.jpg";
import fellow8 from "../../img/fellowship/fellow9.jpg";
import fellow9 from "../../img/fellowship/fellow 10.jpg";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import { useEffect, useState } from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        img: boromir,
        name: "Sean Bean",
        character: "Boromir",
        info: "https://en.wikipedia.org/wiki/Sean_Bean"
    }
  ];

const gallery = [
    {id: 1, img: fellow1},
    {id: 2, img: fellow2},
    {id: 3, img: fellow3},
    {id: 4, img: fellow4},
    {id: 5, img: fellow5},
    {id: 6, img: fellow6},
    {id: 7, img: fellow7},
    {id: 8, img: fellow8},
    {id: 9, img: fellow9}
];
 

const Fellowship = () => {

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
                <section className="fellowship">
                        <div className="container">
                            <div className="head-holder">
                                <h1  className="title">
                                    The Fellowship of the Ring
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
                                                    <a href="https://youtu.be/_nZdmwHrcnw" className="watch-link" data-fancybox>
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
                                                        <p className="raiting-text1">8,8</p>
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
                                                <p className="text">Sauron, the Dark Lord, has awakened and threatens to conquer Middle-earth. To stop this 
                                                    ancient evil once and for all, Frodo Baggins must destroy the One Ring in the fires of Mount Doom. Men, Hobbits,
                                                    a wizard, an Elf, and a Dwarf form a fellowship to help him on his quest. He travels from his home in the Shire with
                                                    fellow hobbits Sam, Merry, and Pippin. They go to the town of Bree, where the group meets a shadowy figure known
                                                    only as Strider. Pursued by Black Riders, they must get to Rivendell. Upon their arrival a council is convened,
                                                        which decides the only course of action must be to take The Ring to Mordor and destroy it. Frodo is joined by 
                                                        his friends Sam, Merry, Pippin, Aragorn, and Gandalf; and newcomers Gimli, Legolas, and Boromir. They try to 
                                                        cross over the Misty Mountains by way of the Pass of Caradhras, but Saruman's magic forces them to turn back 
                                                        and travel underneath, through the mines of Moria. It is here that the Fellowship encounters a Balrog. Gandalf
                                                        challenges the Balrog, and falls from the Bridge of Khazad-dûm into a chasm, presumably to his death. The Fellowship 
                                                        (excluding Gandalf) then travel to the country of the Elves in Lothlórien, and down the Great River on boats,
                                                        where the company splits during an attack by Uruk-hai. Boromir is killed, and Aragorn, Gimli, and Legolas split
                                                        off to track the Uruk-hai who have captured Merry and Pippin. Frodo and Sam head east in the direction of Mordor.
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
                                                <span className="awards">{movie[6].academyAwardNominations}</span>
                                            </li>
                                            <li className="movie-item"> 
                                                <span className="info-about">Academy Award Wins: </span>
                                                <span className="awards">{movie[6].academyAwardWins}</span>
                                            </li>
                                            <li className="movie-item">
                                                <span className="info-about">Box Office Revenue: </span>
                                                <span className="awards">&#36; {movie[6].boxOfficeRevenueInMillions} millions</span>
                                            </li>
                                            <li className="movie-item">
                                                <span className="info-about">Budget: </span>
                                                <span className="awards">&#36; {movie[6].budgetInMillions} millions</span>
                                            </li>
                                            <li className="movie-item">
                                                <span className="info-about">Runtime: </span> 
                                                <span className="awards">{movie[6].runtimeInMinutes} minutes</span>
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
                                                    <img src={twoTowers} alt="image description" className="img-other" />
                                                </div>
                                                <div className="watch-link-holder">
                                                    <Link to="/two-towers" className="watch-link" >
                                                        More info &#8594;
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="second-movie">
                                                <div className="img-holder">
                                                    <img src={returnKing} alt="image description" className="img-other" />
                                                </div>
                                                <div className="watch-link-holder">
                                                    <Link to="/return-king" className="watch-link" >
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

export default Fellowship;

