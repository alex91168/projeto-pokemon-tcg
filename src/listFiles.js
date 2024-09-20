// listFiles.js
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from './firebase'; // Importe o storage do firebase.js

const listFiles = async () => {
  // Cria uma referência para o caminho que você quer listar
  const myPicks = ref(storage, '/');

  try {
    // Lista todos os arquivos na referência
    const res = await listAll(myPicks);
    const { items } = res;

    // Obtém as URLs de download para cada item
    const urls = await Promise.all(
      items.map((item) => getDownloadURL(item))
    );

    // Exibe as URLs no console
    console.log(urls);
  } catch (error) {
    // Ocorreu um erro!
    console.error("Erro ao listar arquivos:", error);
  }
};

// Chame a função
listFiles();
