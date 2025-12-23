import { useState } from 'react'
import data from './data/data.json'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

import './styles/global.css'

function App() {
  const { contato, categorias, produtos } = data
  
  // Estado para controlar a página atual
  const [paginaAtual, setPaginaAtual] = useState('home')

  return (
    <div className="app">
      <Header 
        contato={contato} 
        paginaAtual={paginaAtual}
        onNavigate={setPaginaAtual}
      />

      <main className="main-content">
        {paginaAtual === 'home' && (
          <Home contato={contato} />
        )}
        
        {paginaAtual === 'produtos' && (
          <Products 
            contato={contato} 
            categorias={categorias} 
            produtos={produtos} 
          />
        )}
      </main>

      <Footer contato={contato} />
      <WhatsAppButton whatsapp={contato.whatsapp} />
    </div>
  )
}

export default App