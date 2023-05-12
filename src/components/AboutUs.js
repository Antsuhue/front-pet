import "../css/AboutUs.css";
import about from "../static/aboutUs.json";

function aboutUs() {
  const keys = Object.keys(about["about"]);
  let listCards = [];

  keys.forEach((e) => {
    listCards.push(
      <div key={e} className="box">
        <p>{about["about"][e]}</p>
      </div>
    );
  });

  return (
    <div className="sessao" id="aboutUs">
      <div className="title">
        <h1>Sobre Nós</h1>
      </div>
      <div className="content">{listCards}</div>
    </div>
  );
}

export default aboutUs;
