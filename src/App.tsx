import { } from 'react'
import './App.css'
import Carrossel from './components/carrossel'

function App() {

  return (
    <>
      <div className='header-content ixed top-0 left-0 w-full z-50 bg-black'>
        <h1><span style={{ color: "#165739" }}>Cash</span><span style={{ color: "#cc8e06" }}>Chego</span></h1>
        <ul className='navbarlist'>
          <li><a href="http://" target="_blank" rel="noopener noreferrer" style={{ color: "#cc8e06" }}>Acessar</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">Sobre Nós</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">Contato</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">Documentação</a></li>
        </ul>
      </div>
      <div className='main-session'>

        <div className='view-content'>
          <div className='text-deco'>
            <p>
              <span style={/*offwhite*/{ color: "off-white" }}>Consulte,</span>
              <span style={/*Green*/{ color: "#165739" }}> Analise,</span>
              <span style={/*yellow*/{ color: "#cc8e06" }}> Inspire.</span>
            </p>
          </div>
          <img id='img-logo' src="/5-removebg-preview.png" alt="CashCego Logo" />
        </div>
        <button id='btn-cta'>Acesse Agora.</button>
        <button id='btn-saiba'><span>Saiba Mais</span></button>
      </div>
      <div className='sobrenos-session'>
        <h2>Sobre Nós</h2>
        <div className='sobrenos-text-container'>
          <p>Somos uma Startup que busca promover mais acessibilidade e velocidade no gerenciamento de pequenas empresas e negócios. Utilizando um sistema de controle de fluxo de caixa e com acessibilidade de nossa Inteligência Artificial, a Hanna AI. Nossa Assistente Virtual irá ajudar a desenvolver as principais funções, além de analisar dados, ler tabelas e exibir relatórios.</p>
          <img src="aperto-de-mao2.jpg" alt="Aperto de mão" />
        </div>
      </div>
      <div className='comofunc-session'>
        <h2>Como Funciona</h2>
        <div className='comofunc-container'>
          <div className='comofunc-itens'>
            <div className='cf-item0'>
              <img src="/src/assets/compra-bolsa.jpg" alt="Ícone Consulta" />
              <h3>Consulta</h3>
              <p>Consulte informações e otimize seu tempo com nossa <span style={{
                color: "#cc8e06", fontWeight: "bold"
              }}>Hanna AI Assistente</span>. </p>
            </div>
            <div className='cf-item1'>
              <img src="/src/assets/analise-tablet.jpg" alt="Ícone Análise" />
              <h3>Análise</h3>
              <p>Utilize nossas ferramentas para analisar <span style={{
                color: "#cc8e06", fontWeight: "bold"
              }}>valores de entradas e saídas</span> e gerar relatórios de suas vendas.</p>
            </div>

            <div className='cf-item2'>
              <img src="/src/assets/planta-dinheiro.jpg" alt="Ícone Inspirar" />
              <h3>Inspirar</h3>
              <p>Crie uma estratégia de negócios e visualize com base em dados e insights da <span style={{
                color: "#cc8e06", fontWeight: "bold"
              }}>Hanna AI</span>.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='prova-session'>
        <div className='prova-container'>
          <h3>O que os Clientes acham.</h3>
          <Carrossel />
          <div className='carrossel-container'></div>
        </div>
      </div>
      <div className='cta-session justify-center'>
        <div className="bg-gradient-to-t from-black to-yellow-500 text-white py-16 px-6 text-center rounded-lg shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme sua experiência hoje mesmo!
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Junte-se a centenas de pessoas que já estão aproveitando essa solução incrível. Não perca tempo!
          </p>
          <a
            href="#"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition-all"
          >
            Quero Começar Agora 🚀
          </a>
        </div>
      </div>
      <div className='footer-session'>
        <h2>Entre em Contato</h2>
      </div>
      <div className='footer-container'>
        <p>�� 2025 CashChego DanSystems. Todos os direitos reservados.</p>
      </div>
    </>
  )
}

export default App
