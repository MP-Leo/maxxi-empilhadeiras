import { BrowserRouter, Routes, Route } from 'react-router-dom'
import data from './data/data.json'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

import './styles/global.css'

function App() {
  const { contato, categorias, produtos } = data

  return (
    <BrowserRouter>
      <div className="app">
        <Header contato={contato} />

        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<Home contato={contato} />} 
            />
            <Route 
              path="/produtos" 
              element={
                <Products 
                  contato={contato} 
                  categorias={categorias} 
                  produtos={produtos} 
                />
              } 
            />
          </Routes>
        </main>

        <Footer contato={contato} />
        <WhatsAppButton whatsapp={contato.whatsapp} />
      </div>
    </BrowserRouter>
  )
}

export default App