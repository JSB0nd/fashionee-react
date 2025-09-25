import Header from '../components/Header/Header.jsx';
import ContentBlock from '../components/ContentBlock/ContentBlock.jsx';
import ShowCase from '../components/ShowCase/ShowCase.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function ShopPage() {
    return (
        <>
            <Header />
            <ContentBlock title="Shop" />
            <ShowCase />
            <Footer />
        </>
    );
}
