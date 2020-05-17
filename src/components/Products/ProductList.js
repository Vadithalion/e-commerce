import React from "react";
import Product from "./Product";
export default function ProductList({ title, products }) {
  return (
    <section className="section">
      <div className="top">
        <h2 className="section-title">{title}</h2>
        <div>
          <div className="topInput">
              <input className="searchinput" placeholder="buscar"></input>
              <button id="search">buscar</button>
          </div>
          <div>
            <select id="cars">
              <option>Ordenar precio por...</option>
              <option value="toTop">Ordenar precio de menor a mayor</option>
              <option value="toBot">Ordenar precio de mayor a menor</option>
            </select>
          </div>
        </div>
      </div>
      <div className="products-center">
        {products.map(item => {
          return <Product {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
}