import "./Nav.css";

export default function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="/shop" className="nav__link">Shop</a>
                </li>
                <li className="nav__item">
                    <a href="/men" className="nav__link">Men</a>
                </li>
                <li className="nav__item">
                    <a href="/women" className="nav__link">Women</a>
                </li>
                <li className="nav__item">
                    <a href="/sale" className="nav__link">Sale</a>
                </li>
            </ul>
        </nav>
    );
}
