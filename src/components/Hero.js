import React from "react";

export default function Hero({ children }) {
  return (
    <div>
      <div className="hero">
        <div className="banner">
          <h1>Busca, Restaura, Disfruta</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
