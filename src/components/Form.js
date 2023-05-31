import React, { useState } from "react";
import axios from "axios";
import "../css/Form.css";
import form from "../static/form.json";

const Form = () => {
  let listForm = [];

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("localhost:4000", formValues);
      console.log("Resposta da API:", response.data);
      // Realize ações adicionais após o sucesso da chamada à API
    } catch (error) {
      console.error("Erro na chamada à API:", error);
      // Realize tratamento de erros adequado
    }
  };

  form["form"].forEach((element) => {
    if (!Object.keys(element).includes("options")) {
      listForm.push(
        <label>
          {element.text}
          <input
            type={element.typeElement}
            value={formValues[element.value]}
            onChange={handleInputChange}
            required
          />
        </label>
      );
    } else {
      listForm.push(
        <label>
          {element.text}
          <select id="subject" name="subject" required>
            {element.options.map((option) => {
              return <option value={option}>{option}</option>;
            })}
          </select>
        </label>
      );
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      {listForm}
      
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
