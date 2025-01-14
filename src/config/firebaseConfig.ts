import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';

// Suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBidUGJ1qiWkcCzFQSPtdVVD3jPdxzLtUA",
  authDomain: "casa-de-campo-f788f.firebaseapp.com",
  projectId: "casa-de-campo-f788f",
  storageBucket: "casa-de-campo-f788f.firebasestorage.app",
  messagingSenderId: "223353033304",
  appId: "1:223353033304:web:56e6b3a51e34a4a2b0f02d",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Obter instância do Firestore
const db = getFirestore(app);

// Função para obter o próximo ID sequencial
const getNextId = async () => {
  const docRef = doc(db, 'counters', 'userIdCounter'); // Documento que mantém o contador
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // Se o documento já existe, incrementa o contador
    const currentId = docSnap.data().id;
    const newId = currentId + 1;

    // Atualiza o contador no Firestore
    await updateDoc(docRef, { id: newId });

    return newId;
  } else {
    // Se o documento não existe, cria com o valor inicial
    await setDoc(docRef, { id: 1 });
    return 1; // Retorna o primeiro ID
  }
};

export { db, getNextId };
