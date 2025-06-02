import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Aurorn</p>
            </div>
        </footer>
    );
}

export default Footer;