import "./ProductCard.css";

export default function ProductCard({ image, title, price }) {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-card__img" />
            <h4 className="product-card__title">{title}</h4>
            <p className="product-card__price">{price}</p>
        </div>
    );
}
