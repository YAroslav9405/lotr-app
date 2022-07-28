import { Link } from 'react-router-dom';
import lotrLogo from '../../img/header/lotr-logo.svg'
import {useState} from 'react';

const Header = () => {
    const [isActive, setActive] = useState('false');
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <header className={`header js-header ${isActive ? null : "active"}`}>
        <div className="container">
            <div className="logo-holder">
                <Link to="/" className="logo"> 
                    <img src={lotrLogo} className="img-logo"  alt="lotr" width="70"/>
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
                            <Link to="/news" className="nav-link">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/map" className="nav-link">Map</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <button onClick={handleToggle} className="nav-opener js-nav-opener">
                <span></span>
            </button>
        </div>
    </header>
    )
};

export default Header;

