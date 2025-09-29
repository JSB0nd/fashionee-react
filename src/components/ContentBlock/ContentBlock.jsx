import "./ContentBlock.css";

export default function ContentBlock({ title, background }) {
    return (
        <section
            className="content-block"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="content-block__overlay">
                <h1 className="content-block__title">{title}</h1>
            </div>
        </section>
    );
}
