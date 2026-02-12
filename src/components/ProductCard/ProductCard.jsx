import React from 'react';
import './ProductCard.css';

const ProductCard = ({ produto, onClick }) => {
  return (
    <div className="product-card" onClick={() => onClick(produto)}>
      <div className="card-image-container">
        <img 
          src={produto.imagem} 
          alt={produto.nome} 
          className="card-image"
          loading="lazy" 
        />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{produto.nome}</h3>
        <p className="card-description">
          {produto.descricao}
        </p>
        <button className="card-button">
          Saber mais
        </button>
      </div>
    </div>
  );
};

export default ProductCard;