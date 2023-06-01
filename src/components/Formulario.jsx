import { useState } from "react";

const Formulario = ({ setUsuario, usuario, setShow }) => {

    const [error, setError] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario.nombre.length > 3 && usuario.comidaFavorita.length > 6) {
        setShow(true)
        setError(false)
    }
    else{
        setError(true)
        setShow(false)

    }
    console.log(error)
  };
   let mensaje;

  if(error){
   mensaje= "Esta mal el formulario"
  }
  else if (!error){
    mensaje=""
  }
  



  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input
          type="text"
          onChange={(event) =>
            setUsuario({ ...usuario, nombre: event.target.value })
          }
        />
        <label>Comida: </label>
        <input
          type="text"
          onChange={(event) =>
            setUsuario({ ...usuario, comidaFavorita: event.target.value })
          }
        />
        <button>Enviar</button>
      </form>
    {
        error?<>{mensaje}</>
        : <>{mensaje}</>
    } 

      
    </>
  );
};

export default Formulario;
