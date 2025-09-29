import "./UserMenu.css";

export default function UserMenu() {
    return (
        <div className="user-menu">
            <a href="/account" className="user-menu__link">
                <img src="/icons/user.svg" alt="Account" />
            </a>
            <a href="/cart" className="user-menu__link">
                <img src="/icons/cart.svg" alt="Cart" />
                <span className="cart-count">2</span>
            </a>
        </div>
    );
}
