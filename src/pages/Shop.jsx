import Header from "../components/Header/Header";
import ContentBlock from "../components/ContentBlock/ContentBlock";
import Footer from "../components/Footer/Footer";
import Showcase from "../components/Showcase/Showcase";
import bannerShop from "/images/shop-banner.jpg";

export default function Shop() {
    return (
        <>
            <Header />
            <ContentBlock title="Shop" background={bannerShop} />
            <main className="shop">
                <Showcase />
            </main>
            <Footer />
        </>
    );
}
