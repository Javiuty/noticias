import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { API_KEY } from "./components/Key";
import ListadoNoticias from "./components/ListadoNoticias";

const App = () => {
  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${API_KEY}`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador De Noticias" />

      <div className="container-white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </>
  );
};

export default App;
