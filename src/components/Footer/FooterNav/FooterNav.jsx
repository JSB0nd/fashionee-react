import "./FooterNav.css";

export default function FooterNav() {
    return (
        <div className="footer-nav">
            <h4 className="footer-nav__title">Quick Links</h4>
            <ul className="footer-nav__list">
                <li><a href="/shop">Shop</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/faq">FAQ</a></li>
            </ul>
        </div>
    );
}
