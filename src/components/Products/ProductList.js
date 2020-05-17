import React from "react";
import Product from "./Product";
export default function ProductList({ title, products }) {
  return (
    <section className="section">
      <div className="top">
        <h2 className="section-title">{title}</h2>
        <div>
          <div className="topInput">
              <input className="searchinput" placeholder="search"></input>
              <button id="search">search</button>
          </div>
          <div className="botInput">    
              <button id="top">TOP prices</button>
              <button id="bot">LOW prices</button>
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