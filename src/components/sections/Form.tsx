import React, { useState } from 'react';
import { db, getNextId } from '../../config/firebaseConfig'; // Importando a função getNextId
import { doc, setDoc } from 'firebase/firestore'; // Adicionando setDoc para salvar documentos com ID personalizado

const Form = () => {
  // Estados para armazenar os valores dos inputs
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setPhone] = useState('');
  const [sucesso, setSucesso] = useState(false); // Estado para controlar a mensagem de sucesso

  // Função de submit do formulário
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Objeto com os dados para envio
    const newUser = {
      name: nome,
      email: email,
      phone: telefone,
    };

    try {
      // Obtendo o próximo ID sequencial
      const newId = await getNextId();

      // Usando o ID sequencial para adicionar o documento
      await setDoc(doc(db, 'users', newId.toString()), newUser); // Usando o novo ID como chave

      console.log('Usuário cadastrado com sucesso!');
      setSucesso(true); // Atualiza o estado de sucesso para exibir a mensagem
      setNome('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      setSucesso(false); // Se houver erro, não exibe a mensagem de sucesso
    }
  };

  return (
    <div className="bg-dourado p-8 shadow-lg text-verde" id="form">
     <h3 className="text-xl md:text-3xl font-black mb-2 text-center">RECEBA MAIS INFORMAÇÕES</h3>


      {/* Exibe a mensagem de sucesso se o cadastro for bem-sucedido */}
      {sucesso && (
        <div className="text-dourado text-center bg-verde p-4 rounded mb-4">
          Cadastro realizado com sucesso! Agradecemos pelo seu interesse.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Campo Nome */}
        <div className="mb-4">
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            className="w-full p-2 border border-gray-300"
            required
            placeholder="Nome:"
          />
        </div>

        {/* Campo Email */}
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-2 border border-gray-300"
            required
            placeholder="E-mail:"
          />
        </div>

        {/* Campo Telefone */}
        <div className="mb-4">
          <input
            type="text"
            value={telefone}
            onChange={(event) => setPhone(event.target.value)}
            className="w-full p-2 border border-gray-300"
            required
            placeholder="Telefone"
          />
        </div>

        {/* Botão de Enviar */}
        <button
          type="submit"
          className="w-full bg-verde text-white py-2 font-bold hover:bg-green-800 transition"
        >
          QUERO SABER MAIS
        </button>

        {/* Termos de Consentimento */}
        <div className="text-sm text-verde flex items-start space-x-2 mt-4">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            className="mt-1 h-4 w-4 border-gray-300 rounded text-[#d1af5c] focus:ring-[#d1af5c]"
            required
          />
          <label htmlFor="terms" className="leading-snug text-xs">
            De acordo com a Lei Geral de Proteção de Dados, concordo em fornecer os
            dados acima para que o incorporador entre em contato comigo para
            apresentar produtos e serviços de acordo com a Política de Privacidade
            adotada.
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
