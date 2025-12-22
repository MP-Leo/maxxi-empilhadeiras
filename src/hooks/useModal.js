import { useState } from 'react'

export function useModal() {
  const [modalAberto, setModalAberto] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  const abrirModal = (produto) => {
    setProdutoSelecionado(produto)
    setModalAberto(true)
  }

  const fecharModal = () => {
    setModalAberto(false)
    setProdutoSelecionado(null)
  }

  return {
    modalAberto,
    produtoSelecionado,
    abrirModal,
    fecharModal
  }
}