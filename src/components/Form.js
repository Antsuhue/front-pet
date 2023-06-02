import React, { useState } from "react";
import axios from "axios";
import "../css/Form.css";
import form from "../static/form.json";
import Grid from "./Grid";

const Form = () => {
  const [formValues, setFormValues] = useState({});
  const [responseMessage, setResponseMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        name: formValues.name,
        email: formValues.email,
        qst1: formValues.qst1,
        qst2: formValues.qst2,
        qst3: formValues.qst3,
        qst4: formValues.qst4,
      };

      console.log(formData);
      const response = await axios.post("http://localhost:4000/answer", formData);
      console.log("Resposta da API:", response.data);
      
      // Atualizar a mensagem de resposta
      setResponseMessage(response.data.message);
      
      // Limpar os campos do formulário
      setFormValues({});
      
      // Definir o estado para indicar que o formulário foi enviado
      setIsFormSubmitted(true);

      const getResponse = await axios.get("http://localhost:4000/data");
      console.log("Resposta da API GET:", getResponse.data);
      

    } catch (error) {
      console.error("Erro na chamada à API:", error);
      // Realize tratamento de erros adequado
    }
  };

  const renderFormFields = () => {
    return form["form"].map((element) => {
      const { typeElement, value, text, options } = element;
      return (
        <label key={value}>
          {text}
          {typeElement === "select" ? (
            <select
              id={value}
              name={value}
              value={formValues[value] || ""}
              onChange={handleInputChange}
              required
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={typeElement}
              name={value}
              value={formValues[value] || ""}
              onChange={handleInputChange}
              required
            />
          )}
        </label>
      );
    });
  };

  return (
    <div>
      {!isFormSubmitted ? (
        <form onSubmit={handleSubmit}>
          {renderFormFields()}
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <div>
        <Grid></Grid>
        </div>
        
      )}
    </div>
  );
};

export default Form;
