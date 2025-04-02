export default function HeroSession() {
    return (
        <>
            <div className='main-session flex'>
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
        </>
    )
};