import { Link } from 'react-router-dom';
import logoFooter from '../../img/footer/logo-footer.svg';
import facebook from '../../img/footer/facebook.svg';
import instagram from '../../img/footer/instagram.svg';



const Footer = () => {

    return (
        <footer className='footer'>
            <div className="container-wraper">
                <div className="section-container">
                    <div className="about-footer">
                        <div className="links-holder">
                            <div className="logo-holder">
                                <Link to="/" className="logo"> 
                                    <img src={logoFooter} className="img-logo"  alt="lotr" width="70"/>
                                </Link>
                            </div>
                            <div className="nav-holder js-nav">
                                <nav className="nav">
                                    <ul className="nav-list">
                                        <li className="nav-item">
                                            <Link to="/movies" className="nav-link">Movies</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/characters" className="nav-link">Characters</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/map" className="nav-link">Map</Link>
                                        </li>
                                    </ul>
                                    <div className="text-footer-holder">
                                        <p className="text-footer">&#169; 2022 LOTR About The Lord of The Ring</p>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="social-holder">
                            <div className="text-footer-holder">
                                <p className="text-footer social">We at social</p>
                                <div className="social-img">
                                    <a href="https://www.instagram.com/lotr.official/?hl=en" target="_blank" >
                                        <img src={instagram} className="social-net" alt="instagram" />
                                    </a>
                                    <a href="https://www.facebook.com/lordoftheringstrilogy/" target="_blank" >
                                        <img src={facebook} className="social-net" alt="facebook" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="author-holder">
                <p className="author">Create by Yaroslv Hrytsiak</p>
            </div>
    </footer>
    )
    
};

export default Footer;