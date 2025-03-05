export default function HomePage() {
    return (
        <section className="homeContent pageContent">
            <img className="logo" src="./src/assets/grubhublogo.jpg"/>
            <div className="callToAction">
                <h3>Call to action</h3>
            </div>
            <h2>Highlights</h2>
            <section className="highlightSection">
                <div className="highlight">
                    <p>Seoul Born</p>
                </div>
                <div className="highlight">
                    <p>Namaste Village</p>
                </div>
                <div className="highlight">
                    <p>Thai Lana</p>
                </div>
            </section>
        </section>
    )
}