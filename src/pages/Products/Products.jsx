import React from 'react'
import { useModal } from '../../hooks/useModal'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import ProductModal from '../../components/ProductModal/ProductModal'
import './Products.css'

function Products({ contato, produtos }) {
  const {
    modalAberto,
    produtoSelecionado,
    abrirModal,
    fecharModal
  } = useModal()

  return (
    <div className="products-page">
    

      {/* O Grid agora recebe a lista direta de produtos.
         A prop 'onProductClick' conecta o Card ao Modal.
      */}
      <ProductGrid 
        produtos={produtos}
        onProductClick={abrirModal}
      />

      {/* Renderização Condicional do Modal */}
      {modalAberto && (
        <ProductModal 
          produto={produtoSelecionado}
          contato={contato}
          onClose={fecharModal}
        />
      )}
    </div>
  )
}

export default Products