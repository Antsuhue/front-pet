import "../css/AboutUs.css";
import about from "../static/aboutUs.json";

function aboutUs() {

  const cards = about["about"].map((card) => {
    return(
    <div className="card">
      <div className="card-icon">
        <img alt={card.alt} src={card.img} />
      </div>
      <div className="card-content">
        <h3>{card.title}</h3>
        <p>{card.text}</p>
      </div>
    </div>);
  });

  return (
    <section className="about-section">
      <h2>Sobre nós</h2>

      <div className="card-container">
        {cards}
      </div>
    </section>
  );
}

export default aboutUs;
