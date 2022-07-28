import Header from "../../componets/Header/Header";
import Footer from "../../componets/Footer/Footer";
import fellowship from '../../img/movie/fellowship.jpeg';
import twoTowers from '../../img/movie/two-towers.jpg';
import returnKing from '../../img/movie/faramir.jpeg';
import "@fancyapps/ui/dist/fancybox.css";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Movies = () => {
    
    const [movie, setMovie] = useState();
    const request = async ()=> {
        const response = await fetch (`https://the-one-api.dev/v2/movie`,  {headers:{Authorization: "Bearer IJK1dkd6deE7Z0m2uUB4"}} );
        const data = await response.json();
        setMovie(data.docs);
    }
    useEffect(() => {
       
        request();
    }, []);
   


    return (
        <div className="movie-main">
            <Header/>
            <main className="main">
                <section className="movies">
                    <div className="container">
                        <div className="link-holder">
                            <a href="#movies" className="link">
                                Scroll to Movies<span></span>
                            </a>
                        </div>
                    </div>
                </section>
                {movie && (
                    <section  id="movies" className="about-movies">
                    <div className="section-container">
                        <div className="title-holder-main">
                            <h2 className="main-title">movies</h2>
                        </div>
                        
                        <div className="blocks-holder movie">
                            <div className="text-block">
                                <div className="title-holder">
                                    <p className="title">{movie[6].name}</p>
                                </div>
                                <ul className="about-movie-list">
                                    <li className="movie-item">Academy Award Nominations: {movie[6].academyAwardNominations}</li>
                                    <li className="movie-item">Academy Award Wins: {movie[6].academyAwardWins}</li>
                                    <li className="movie-item">Box Office Revenue: {movie[6].boxOfficeRevenueInMillions} millions</li>
                                    <li className="movie-item">Budget: {movie[6].budgetInMillions} millions</li>
                                    <li className="movie-item">Runtime: {movie[6].runtimeInMinutes} minutes</li>
                                </ul>
                                <div className="text-holder">
                                    <p className="text">Adventure, Drama, Fantasy</p>
                                </div>
                                <div className="text-holder">
                                    <p className="text">A meek Hobbit from the Shire and eight companions set out on a jorney to destroy the powerful One ring and save Middle-Earht from the Dark Lord Sauron</p>
                                </div>
                                <div className="watch-link-holder">
                                    <Link to="/fellowship" className="watch-link" >
                                        More info &#8594;
                                    </Link>
                                </div>
                            </div>
                            <div className="frodo-holder">
                                <img src={fellowship} className="img-frodo" alt="frodo" width='65'/>
                            </div>
                        </div>
                        <div className="blocks-holder  movie">
                            <div className="text-block">
                                <div className="title-holder">
                                    <p className="title">{movie[5].name}</p>
                                </div>
                                <ul className="about-movie-list">
                                    <li className="movie-item">Academy Award Nominations: {movie[5].academyAwardNominations}</li>
                                    <li className="movie-item">Academy Award Wins: {movie[5].academyAwardWins}</li>
                                    <li className="movie-item">Box Office Revenue: {movie[5].boxOfficeRevenueInMillions} millions</li>
                                    <li className="movie-item">Budget: {movie[5].budgetInMillions} millions</li>
                                    <li className="movie-item">Runtime: {movie[5].runtimeInMinutes} minutes</li>
                                </ul>
                                <div className="text-holder">
                                    <p className="text">Adventure, Drama, Fantasy</p>
                                </div>
                                <div className="text-holder">
                                    <p className="text">While Frodo and Sam edge closer to Mordor with the help of the shifty Golum, the divideed fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard</p>
                                </div>
                                <div className="watch-link-holder">
                                    <Link to="/two-towers" className="watch-link" >
                                        More info &#8594;
                                    </Link>
                                </div>
                            </div>
                            <div className="frodo-holder">
                                <img src={twoTowers} className="img-frodo" alt="image-description" width='65'/>
                            </div>
                        </div>
                        <div className="blocks-holder  movie">
                            <div className="text-block">
                                <div className="title-holder">
                                    <p className="title">{movie[7].name}</p>
                                </div>
                                <ul className="about-movie-list">
                                    <li className="movie-item">Academy Award Nominations: {movie[7].academyAwardNominations}</li>
                                    <li className="movie-item">Academy Award Wins: {movie[7].academyAwardWins}</li>
                                    <li className="movie-item">Box Office Revenue: {movie[7].boxOfficeRevenueInMillions} millions</li>
                                    <li className="movie-item">Budget: {movie[7].budgetInMillions} millions</li>
                                    <li className="movie-item">Runtime: {movie[7].runtimeInMinutes} minutes</li>
                                </ul>
                                <div className="text-holder">
                                    <p className="text">Adventure, Drama, Fantasy</p>
                                </div>
                                <div className="text-holder">
                                    <p className="text">Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring</p>
                                </div>
                                <div className="watch-link-holder">
                                    <Link to="/return-king" className="watch-link" >
                                        More info &#8594;
                                    </Link>
                                </div>
                            </div>
                            <div className="frodo-holder">
                                <img src={returnKing} className="img-frodo" alt="image-description" width='65'/>
                            </div>
                        </div>
                    </div> 
                    </section>
                )}
            </main>
            <Footer/>
        </div>
    )
}

export default Movies;