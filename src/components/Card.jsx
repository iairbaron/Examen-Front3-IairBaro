import React from "react";

const Card = ({ usuario }) => {
  const cardStyle = {
    backgroundColor: "#f4f4f4",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
    color:"black"
  };

  const textStyle = {
    fontSize: "16px",
    color:"black"
  };

  return (
    <div style={cardStyle}>
      <h4 style={titleStyle}>Hola {usuario.nombre}</h4>
      <h4 style={textStyle}>Su comida favorita es {usuario.comidaFavorita}</h4>
    </div>
  );
};

export default Card;