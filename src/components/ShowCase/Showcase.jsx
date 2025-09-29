import "./Showcase.css";
import Sidebar from "./Sidebar/Sidebar";
import ProductGrid from "./ProductGrid/ProductGrid";
import Pagination from "./Pagination/Pagination";

export default function Showcase() {
    return (
        <section className="showcase container">
            <Sidebar />
            <div className="showcase__content">
                <ProductGrid />
                <Pagination />
            </div>
        </section>
    );
}
