import './ProductCard.css'

function ProductCard({ produto, onClick }) {
  return (
    <div className="produto-card" onClick={onClick}>
      <img src={produto.imagem} alt={produto.nome} />
      <div className="produto-info">
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
        <div className="produto-footer">
          <span className="produto-preco">
            R$ {produto.preco.toLocaleString('pt-BR')}
          </span>
          <span className="produto-categoria">{produto.categoria}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard