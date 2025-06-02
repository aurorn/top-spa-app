import '../styles/header.css';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="header">
                <h1 className="header-title">Single Page Application</h1>
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Header;