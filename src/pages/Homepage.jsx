import './Homepage.styles.css'

export default function HomepageComponent() {
    return (
        <div id="conteudo">
            <section className="principal">
                <div className="linha" id="linha1">
                    <div className="coluna" id='col1'>
                        <section id="apresentacao-busca">
                            <div id="apresentacao-produto">
                                <h1 className='apresentacao-homepage-titulo'>Tire suas dúvidas sobre computadores de forma rápida.</h1>
                                <h3 className='apresentacao-homepage-h3'>Essa ferramenta vai ajudar você nas mais diversas dificuldades</h3>
                                <input type="search" name="searchConteudo" id="searchConteudo" />
                            </div>
                        </section>
                    </div>
                    <div className="coluna" id="col2">
                        <section id="apresentacao-imagem">
                            <div id="imagem-principal">
                                <img src="/images/apresentacao.png" alt="ilustração de uma pessoa tirando dúvidas no site" />
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}