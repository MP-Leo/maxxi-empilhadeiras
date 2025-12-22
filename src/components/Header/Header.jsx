import './Header.css'

function Header({ 
  contato, 
  categorias, 
  busca, 
  categoriaAtiva, 
  ordenacao, 
  onFiltroChange 
}) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-topo">
          <div className="header-logo">
            <h1>{contato.nome}</h1>
            <span>{contato.slogan}</span>
          </div>

          <div className="header-filtros">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={busca}
              onChange={(e) => onFiltroChange(e.target.value, 'busca')}
              className="filtro-busca"
            />

            <div className="filtro-categorias">
              {categorias.map(categoria => (
                <button
                  key={categoria}
                  className={`filtro-categoria-btn ${categoriaAtiva === categoria ? 'ativo' : ''}`}
                  onClick={() => onFiltroChange(categoria, 'categoria')}
                >
                  {categoria}
                </button>
              ))}
            </div>

            <select
              value={ordenacao}
              onChange={(e) => onFiltroChange(e.target.value, 'ordenacao')}
              className="filtro-ordenacao"
            >
              <option value="padrao">Ordenar: Padrão</option>
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
              <option value="recente">Mais recente</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header