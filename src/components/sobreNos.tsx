export default function SobreNos() {

    return (
        <>
            <div className='sobrenos-session flex flex-col lg:h-screen h-auto bg-[#5d675b96]'>
                <h2 className="flex self-start ml-10 mt-10 text-6xl font-extrabold italic">Sobre Nós</h2>
                <div className='sobrenos-text-container 
                flex
                flex-1
                flex-col
                lg:flex-row
                justify-between
                content-start
                  '>
                    <p className="flex self-center ml-10 lg:mr-20 text-2xl font-medium text-justify">
                        Somos uma Startup que busca promover mais acessibilidade e velocidade no gerenciamento de pequenas empresas e negócios. Utilizando um sistema de controle de fluxo de caixa e com acessibilidade de nossa Inteligência Artificial, a Hanna AI. Nossa Assistente Virtual irá ajudar a desenvolver as principais funções, além de analisar dados, ler tabelas e exibir relatórios.
                    </p>
                    <img src="aperto-de-mao2.jpg" alt="Aperto de mão" />
                </div>
            </div>
        </>
    );
};