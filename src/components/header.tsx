export default function Header() {

    return (
        <>
            <div>
                <div className='header-content flex items-center h-[70px] px-4 bg-black fixed top-0 left-0 w-full z-50'>
                    <h1 className="font-bold pl-3 text-2xl sm:text-3xl">
                        <span className="text-[#165739]">Cash</span>
                        <span className="text-[#cc8e06]" >Chego</span>
                    </h1>
                    <ul className='navbarlist flex gap-4 sm:gap-12 md:gap-24 ml-10 sm:ml-48'>
                        <li>
                            <a href="http://"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#cc8e06]"
                            >Acessar
                            </a>
                        </li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">Sobre Nós</a></li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">Contato</a></li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">Documentação</a></li>
                    </ul>
                </div>

            </div>
        </>
    )
};