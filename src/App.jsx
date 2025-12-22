import data from './data/data.json'
import { useProducts } from './hooks/useProducts'
import { useModal } from './hooks/useModal'

import Header from './components/Header/Header'
import ProductGrid from './components/ProductGrid/ProductGrid'
import Modal from './components/Modal/Modal'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

import './styles/global.css'

function App() {
  const { contato, categorias, produtos } = data

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
    <div className="app">
      <Header 
        contato={contato}
        categorias={categorias}
        busca={busca}
        categoriaAtiva={categoriaAtiva}
        ordenacao={ordenacao}
        onFiltroChange={handleFiltroChange}
      />

      <ProductGrid 
        produtos={produtosPaginados}
        paginaAtual={paginaAtual}
        totalPaginas={totalPaginas}
        onPageChange={setPaginaAtual}
        onProductClick={abrirModal}
      />

      {modalAberto && (
        <Modal 
          produto={produtoSelecionado}
          contato={contato}
          onClose={fecharModal}
        />
      )}

      <Footer contato={contato} />

      <WhatsAppButton whatsapp={contato.whatsapp} />
    </div>
  )
}

export default App