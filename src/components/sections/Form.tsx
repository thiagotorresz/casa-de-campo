import React, { useState } from "react";

const Form = () => {
  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Substitua pelo URL do seu Apps Script
      const scriptURL = "https://script.google.com/macros/s/AKfycbzZg61y5Px7UcLKxjNkswcd_zVpdzkknu_fQbO8iQ1G8NJqsbNkzapMRIqCg0fQNJZD/exec";

      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result.status === "success") {
        alert("Dados enviados com sucesso!");
        setFormData({ nome: "", email: "", telefone: "" }); // Limpa o formulário
      } else {
        alert("Erro ao enviar os dados.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar os dados.");
    }
  };

  return (
    <section id="form" className="py-8 bg-[#cec5b3] flex justify-center">
      <div className="w-[90%] max-w-md bg-[#154734] text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-center font-bold text-xl uppercase mb-4 text-[#d1af5c]">
          Receba Mais Informações
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              placeholder="Nome:"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-[#d1af5c] focus:border-[#d1af5c]"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E-mail:"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-[#d1af5c] focus:border-[#d1af5c]"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              placeholder="Telefone:"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-[#d1af5c] focus:border-[#d1af5c]"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-[#d1af5c] text-[#154734] font-bold py-3 rounded-md uppercase hover:bg-[#c19e53]"
            >
              Quero Saber Mais
            </button>
          </div>
          <div className="text-sm text-gray-300 flex items-start space-x-2">
            <input
              type="checkbox"
              name="lgpd"
              id="lgpd"
              className="mt-1 h-4 w-4 border-gray-300 rounded text-[#d1af5c] focus:ring-[#d1af5c]"
              required
            />
            <label htmlFor="lgpd" className="leading-snug">
              De acordo com a Lei Geral de Proteção de Dados, concordo em fornecer os
              dados acima para que o incorporador entre em contato comigo para
              apresentar produtos e serviços de acordo com a Política de Privacidade
              adotada.
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
