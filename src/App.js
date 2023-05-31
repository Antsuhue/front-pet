import React, { useState } from "react";
import Form from "./components/Form";
import "./css/App.css";
import cat1 from "./static/images/banner4.png";
import cat2 from "./static/images/banner5.png";
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
    { id: 1, label: 'Home', link: '#section1' },
    { id: 2, label: 'About', link: '#section2' },
    { id: 3, label: 'Contact', link: '#' },
  ];

  return (
    <div className="container">
      <header>
        <Menu items={menuItems}/>
      </header>

      <h1>Bem-vindo à nossa Landing Page de Gatos de Estimação!</h1>
      <img id="imgHeader" className="cat-image" src={cat1} alt="Cat 1" />

      <AboutUs/>

      <section id="section2">
        <h2>Seção 2</h2>
        {success ? (
          <p>Formulário enviado com sucesso!</p>
        ) : (
          <Form onSubmit={handleSubmit} />
        )}
      </section>

      <section id="section3">
        <h2>Seção 3</h2>
        <p>Conteúdo da Seção 3</p>
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
