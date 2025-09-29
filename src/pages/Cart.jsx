import Header from "../components/Header/Header";
import ContentBlock from "../components/ContentBlock/ContentBlock";
import Footer from "../components/Footer/Footer";
import bannerCart from "/images/cart-banner.jpg";

export default function Cart() {
    return (
        <>
            <Header />
            <ContentBlock title="Cart" background={bannerCart} />
            <main className="cart">
                {/* содержимое корзины перенесём отдельными компонентами позже */}
                <div className="container">
                    <h2>Your Shopping Cart</h2>
                </div>
            </main>
            <Footer />
        </>
    );
}
