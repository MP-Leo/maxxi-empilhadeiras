import ProductCard from '../ProductCard/ProductCard'
import Pagination from '../Pagination/Pagination'
import './ProductGrid.css'

function ProductGrid({ produtos, paginaAtual, totalPaginas, onPageChange, onProductClick }) {
  return (
    <main className="produtos-container">
      <div className="produtos-grid">
        {produtos.map(produto => (
          <ProductCard 
            key={produto.id}
            produto={produto}
            onClick={() => onProductClick(produto)}
          />
        ))}
      </div>

      <Pagination 
        paginaAtual={paginaAtual}
        totalPaginas={totalPaginas}
        onPageChange={onPageChange}
      />
    </main>
  )
}

export default ProductGrid