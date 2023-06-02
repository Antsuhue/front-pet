import React, { useState } from "react";
import Form from "./components/Form";
import "./css/App.css";
import cat1 from "./static/images/banner4.png";
import cat2 from "./static/images/banner5.png";
import ong from "./static/images/ong.png"
import ong2 from "./static/images/ong2.png"
import ong3 from "./static/images/ong3.jpg"
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";

const App = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (data) => {
    // Faça algo com os dados do formulário aqui, como enviar para um servidor

    // Exiba a mensagem de sucesso
    setSuccess(true);
  };

  const menuItems = [
    { id: 1, label: 'Sore Nós', link: '#section1' },
    { id: 2, label: 'Veja Nossos Felinos', link: '#section2' },
    { id: 3, label: 'Ongs Parceiras', link: '#section3' },
  ];

  return (
    <div className="container">
      <header>
        <Menu items={menuItems}/>
      </header>

      <h1>Amigos dos Peludos!</h1>
      <img id="imgHeader" className="cat-image" src={cat1} alt="Cat 1" />

      <AboutUs/>

      <section id="section2">
        <h2>Veja Nossos Felinos</h2>
        {success ? (
          <p></p>
        ) : (
          <Form onSubmit={handleSubmit} />
        )}
      </section>

      <section id="section3">
        <h2>Ongs Parceiras</h2>
        <div class="partner-container">
          <img class="ong" alt="parceiro1" src={ong} />
          <img class="ong" alt="parceiro2" src={ong2} />
          <img class="ong" alt="parceiro3" src={ong3} />
        </div>
      </section>

      <img id="imgBottom" className="cat-image" src={cat2} alt="Cat 2" />

      <footer>
        <div className="container">
          <p>Entre em contato conosco:</p>
          <ul>
            <li>Email: contato@gatosdeestimacao.com</li>
            <li>Telefone: (11) 1234-5678</li>
            <li>Endereço: Rua dos Gatinhos, 123 - Cidade dos Gatos</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
