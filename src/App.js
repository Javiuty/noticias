import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { API_KEY } from "./components/Key";

const App = () => {
  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=gb&category=${categoria}&apiKey=${API_KEY}`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      console.log(noticias);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador De Noticias" />

      <div className="container-white">
        <Formulario guardarCategoria={guardarCategoria} />
      </div>
    </>
  );
};

export default App;
