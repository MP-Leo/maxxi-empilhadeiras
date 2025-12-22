import './Pagination.css'

function Pagination({ paginaAtual, totalPaginas, onPageChange }) {
  if (totalPaginas <= 1) return null

  return (
    <div className="paginacao">
      <button
        className="paginacao-btn"
        onClick={() => onPageChange(Math.max(1, paginaAtual - 1))}
        disabled={paginaAtual === 1}
      >
        ←
      </button>

      {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(pagina => (
        <button
          key={pagina}
          className={`paginacao-btn ${paginaAtual === pagina ? 'ativo' : ''}`}
          onClick={() => onPageChange(pagina)}
        >
          {pagina}
        </button>
      ))}

      <button
        className="paginacao-btn"
        onClick={() => onPageChange(Math.min(totalPaginas, paginaAtual + 1))}
        disabled={paginaAtual === totalPaginas}
      >
        →
      </button>
    </div>
  )
}

export default Pagination