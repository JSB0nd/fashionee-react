import "./Footer.css";
import FooterNav from "./FooterNav/FooterNav";
import SocialLinks from "./SocialLinks/SocialLinks";
import PaymentMethods from "./PaymentMethods/PaymentMethods";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <FooterNav />
                <SocialLinks />
                <PaymentMethods />
            </div>
            <div className="footer__bottom">
                <p>© 2025 Fashionee. All rights reserved.</p>
            </div>
        </footer>
    );
}
