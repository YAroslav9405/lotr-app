import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header js-header">
        <div className="container">
            <div className="logo-holder">
                <a href="#" className="logo"> 
                    <img  className="img-logo"  alt="productly" width="185"/>
                </a>
            </div>
            <div className="nav-holder js-nav">
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Product</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Customers</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Pricng</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Resources</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <button className="nav-opener js-nav-opener">
                <span></span>
            </button>
        </div>
    </header>
    )
};

export default Header;

{/* <Link to="/" className="nav-link">Home</Link> */}