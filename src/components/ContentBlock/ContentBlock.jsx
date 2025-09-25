import './ContentBlock.css';

export default function ContentBlock({ title, subtitle, banner}) {
    return (
        <section className="content-block">
            {banner && (
                <div className="content-block-banner">
                    <img src={banner} alt={`${title} banner`} />
                </div>
            )}
            <div className="content-block__inner">
                <h1>{title}</h1>
                {subtitle && <p className="content-block+__subtitle">{subtitle}</p>}
            </div>
        </section>
    );
}