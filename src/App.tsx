import { } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='header-content'>
        <h1><span style={{ color: "#165739" }}>Cash</span><span style={{ color: "#cc8e06" }}>Chego</span></h1>
        <ul className='navbarlist'>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">Inscreva-se</a></li>
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
        <button id='btn-saiba'><span>Saiba Mais</span></button>
      </div>
      <div className='sobrenos-session'>
        <h2>Sobre Nós</h2>
        <div className='sobrenos-text-container'>

          <p>Somos uma Startup que busca promover mais acessibilidade e velocidade no gerenciamento de pequenas empresas e negócios. Utilizando uma Inteligência Artificial, a Hanna. Nossa Assistente Virtual irá ajudar a desenvolver as principais funções, além de analisar dados, ler tabelas e exibir relatórios. Keep in focus </p>
          <img src="aperto-de-mao2.jpg" alt="Aperto de mão" />
        </div>
      </div>
      <div className='comofunc-session'>
        <h2>Como Funciona</h2>
        <div className='comofunc-container'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos corrupti nostrum, dicta iste recusandae vero blanditiis autem velit earum quidem dolor voluptatum soluta tempora est, modi impedit accusamus officia?
          </p>
          <div className='comofunc-itens'>
            <div className='cf-item0'>
            <img src="/src/assets/analise-tablet.jpg" alt="Ícone Análise" />
            <h3>Análise</h3>
            <p>Utilize nossas ferramentas para analisar dados, ler tabelas e gerar relatórios.</p>
            </div>
            <div className='cf-item1'>
              <img src="/src/assets/compra-bolsa.jpg" alt="Ícone Consulta" />
              <h3>Consulta</h3>
              <p>Entre em contato com nossos especialistas para consultar sobre nossos produtos e serviços.</p>
            </div>
            <div className='cf-item2'>
              <img src="/src/assets/planta-dinheiro.jpg" alt="Ícone Inspirar" />
              <h3>Inspirar</h3>
              <p>Crie uma estratégia de negócios com base em dados e insights da Hanna.</p>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
