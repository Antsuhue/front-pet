import React, { useState } from 'react';
import Form from './components/Form';
import "./css/App.css"
import cat1 from "./images/banner4.png"
import cat2 from "./images/banner5.png"

const App = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (data) => {
    // Faça algo com os dados do formulário aqui, como enviar para um servidor

    // Exiba a mensagem de sucesso
    setSuccess(true);
  };

  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#section1">Seção 1</a>
            </li>
            <li>
              <a href="#section2">Seção 2</a>
            </li>
            <li>
              <a href="#section3">Seção 3</a>
            </li>
          </ul>
        </nav>
      </header>

      <h1>Bem-vindo à nossa Landing Page de Gatos de Estimação!</h1>
      <img id='imgHeader' className="cat-image" src={cat1} alt="Cat 1" />

      <section id="section1">
        <h2>Seção 1</h2>
        <p>Conteúdo da Seção 1</p>
      </section>

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

      <img id='imgBottom'  className="cat-image" src={cat2} alt="Cat 2" />

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