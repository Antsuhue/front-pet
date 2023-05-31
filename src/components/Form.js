import React, { useState } from 'react';
import axios from 'axios';
import "../css/Form.css";
import form from "../static/form.json";

const Form = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [qst1, setQst1] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit({ name, email, qst1});
  //   setName('');
  //   setEmail('');
  //   setQst1('');
  // };

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('localhost:4000', formValues);
      console.log('Resposta da API:', response.data);
      // Realize ações adicionais após o sucesso da chamada à API
    } catch (error) {
      console.error('Erro na chamada à API:', error);
      // Realize tratamento de erros adequado
    }
  };

  const renderForm = form["form"].map((element) => {
    return (
      <label>
        {element.text}
        <input
          type={element.typeElement}
          value={formValues[element.value]}
          onChange={handleInputChange}
        />
      </label>
    )
  })


  return (
    <form onSubmit={handleSubmit}>
      {renderForm}
      {/* <label>
        Nome:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
      Adotaria um gatinho com mais de 6 anos?
        <select id="subject" name="subject">
          <option value="opcao1"></option>
          <option value="opcao2">Opção 2</option>
          <option value="opcao3">Opção 3</option>
        </select>
      </label> */}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;