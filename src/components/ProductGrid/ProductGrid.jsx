import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

function ProductGrid({ produtos, onProductClick }) {

  return (
    <main className="produtos-container">
      <div className="produtos-flex">
        {produtos.map(produto => (
          <ProductCard 
            key={produto.id || produto.nome}
            produto={produto}
            onClick={onProductClick}
          />
        ))}
      </div>
    </main>
  )
}

export default ProductGrid