import { useProducts } from '../../hooks/useProducts'
import { useModal } from '../../hooks/useModal'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import Modal from '../../components/Modal/Modal'
import './Products.css'

function Products({ contato, categorias, produtos }) {
  const {
    busca,
    categoriaAtiva,
    ordenacao,
    paginaAtual,
    produtosPaginados,
    totalPaginas,
    handleFiltroChange,
    setPaginaAtual
  } = useProducts(produtos)

  const {
    modalAberto,
    produtoSelecionado,
    abrirModal,
    fecharModal
  } = useModal()

  return (
    <div className="products-page">
      {/* Barra de Filtros */}
      <div className="products-filtros-bar">
        <div className="products-filtros-container">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={busca}
            onChange={(e) => handleFiltroChange(e.target.value, 'busca')}
            className="filtro-busca"
          />

          <div className="filtro-categorias">
            {categorias.map(categoria => (
              <button
                key={categoria}
                className={`filtro-categoria-btn ${categoriaAtiva === categoria ? 'ativo' : ''}`}
                onClick={() => handleFiltroChange(categoria, 'categoria')}
              >
                {categoria}
              </button>
            ))}
          </div>

          <select
            value={ordenacao}
            onChange={(e) => handleFiltroChange(e.target.value, 'ordenacao')}
            className="filtro-ordenacao"
          >
            <option value="padrao">Ordenar: Padrão</option>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
            <option value="recente">Mais recente</option>
          </select>
        </div>
      </div>

      {/* Grid de Produtos */}
      <ProductGrid 
        produtos={produtosPaginados}
        paginaAtual={paginaAtual}
        totalPaginas={totalPaginas}
        onPageChange={setPaginaAtual}
        onProductClick={abrirModal}
      />

      {/* Modal */}
      {modalAberto && (
        <Modal 
          produto={produtoSelecionado}
          contato={contato}
          onClose={fecharModal}
        />
      )}
    </div>
  )
}

export default Products