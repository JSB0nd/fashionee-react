import "./Header.css";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import SearchBar from "./SearchBar/SearchBar";
import UserMenu from "./UserMenu/UserMenu";

export default function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <Logo />
                <Nav />
                <SearchBar />
                <UserMenu />
            </div>
        </header>
    );
}
