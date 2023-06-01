import { useState } from "react";
import Formulario from "./components/Formulario";
import Card from "./components/Card";

const App = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    comidaFavorita: "",
  });

  const [show, setShow] = useState(false);

  return (
    <>
      <Formulario setShow={setShow} usuario={usuario} setUsuario={setUsuario} />
      {show ? (
        <>
          <Card usuario={usuario} />
        </>
      ) : null}
    </>
  );
};

export default App;