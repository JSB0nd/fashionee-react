import "./SearchBar.css";

export default function SearchBar() {
    return (
        <form className="search">
            <input type="text" className="search__input" placeholder="Search products..." />
            <button type="submit" className="search__btn">
                <img src="/icons/search.svg" alt="Search" />
            </button>
        </form>
    );
}
