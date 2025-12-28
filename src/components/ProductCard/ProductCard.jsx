import './ProductCard.css'

function ProductCard({ produto, onClick }) {
  return (
    <div className="produto-card" onClick={onClick}>
      <div className="produto-imagem-container">
        <img src={produto.imagem} alt={produto.nome} />
        <span className="produto-categoria">{produto.categoria}</span>
      </div>
      <div className="produto-info">
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
      </div>
    </div>
  )
}

export default ProductCard