import "./Sidebar.css";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__block">
                <h3 className="sidebar__title">Categories</h3>
                <ul>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Kids</a></li>
                </ul>
            </div>

            <div className="sidebar__block">
                <h3 className="sidebar__title">Brands</h3>
                <ul>
                    <li><a href="#">Nike</a></li>
                    <li><a href="#">Adidas</a></li>
                    <li><a href="#">Puma</a></li>
                </ul>
            </div>

            <div className="sidebar__block">
                <h3 className="sidebar__title">Price</h3>
                <input type="range" min="0" max="500" />
            </div>
        </aside>
    );
}
