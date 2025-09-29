import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid() {
    return (
        <div className="product-grid">
            <ProductCard
                image="/images/products/product1.jpg"
                title="Leather Jacket"
                price="$120"
            />
            <ProductCard
                image="/images/products/product2.jpg"
                title="Casual Sneakers"
                price="$90"
            />
            <ProductCard
                image="/images/products/product3.jpg"
                title="Classic T-Shirt"
                price="$30"
            />
        </div>
    );
}
