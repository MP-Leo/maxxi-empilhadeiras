import { useState, useMemo } from 'react'

export function useProducts(produtos, itensPorPagina = 9) {
  // Estados para filtros
  const [busca, setBusca] = useState('')
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas')
  const [ordenacao, setOrdenacao] = useState('padrao')
  
  // Estado para paginação
  const [paginaAtual, setPaginaAtual] = useState(1)

  // Filtrar e ordenar produtos
  const produtosFiltrados = useMemo(() => {
    return produtos
      .filter(produto => {
        const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase()) ||
                           produto.descricao.toLowerCase().includes(busca.toLowerCase())
        const matchCategoria = categoriaAtiva === 'Todas' || produto.categoria === categoriaAtiva
        return matchBusca && matchCategoria
      })
      .sort((a, b) => {
        if (ordenacao === 'menor-preco') return a.preco - b.preco
        if (ordenacao === 'maior-preco') return b.preco - a.preco
        if (ordenacao === 'recente') return b.ano - a.ano
        return 0
      })
  }, [produtos, busca, categoriaAtiva, ordenacao])

  // Calcular paginação
  const totalPaginas = Math.ceil(produtosFiltrados.length / itensPorPagina)
  const indiceInicio = (paginaAtual - 1) * itensPorPagina
  const indiceFim = indiceInicio + itensPorPagina
  const produtosPaginados = produtosFiltrados.slice(indiceInicio, indiceFim)

  // Função para mudar filtros (reseta página)
  const handleFiltroChange = (novoFiltro, tipo) => {
    setPaginaAtual(1)
    if (tipo === 'busca') setBusca(novoFiltro)
    if (tipo === 'categoria') setCategoriaAtiva(novoFiltro)
    if (tipo === 'ordenacao') setOrdenacao(novoFiltro)
  }

  return {
    // Estados
    busca,
    categoriaAtiva,
    ordenacao,
    paginaAtual,
    
    // Dados calculados
    produtosFiltrados,
    produtosPaginados,
    totalPaginas,
    
    // Funções
    handleFiltroChange,
    setPaginaAtual
  }
}