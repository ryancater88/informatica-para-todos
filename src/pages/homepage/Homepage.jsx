import { useEffect } from 'react'
import './Homepage.styles.css'
import { useNavigate } from 'react-router-dom'

export default function HomepageComponent() {
    const navegacao = useNavigate()

    useEffect(() => {
        const currentPage = window.location.pathname
        if (currentPage === '/') navegacao('/home')
    })

    const goToCourses = () => {
        navegacao('/course')
    }

    return (
        <div id="conteudo">
            <div id="container-principal">
                <section className="principal">
                    <div className="linha" id="linha1">
                        <div className="coluna" id='col1'>
                            <section id="apresentacao-busca">
                                <div id="apresentacao-produto">
                                    <h1 className='apresentacao-homepage-titulo'>Tire suas dúvidas sobre computadores de forma rápida.</h1>
                                    <h3 className='apresentacao-homepage-h3'>Essa ferramenta vai ajudar você nas mais diversas dificuldades</h3>
                                    <button onClick={() => goToCourses()} className="confirm" id="acessar-material">Acessar conteúdo:</button>
                                </div>
                            </section>
                        </div>
                        <div className="coluna" id="col2">
                            <section id="apresentacao-imagem">
                                <div id="imagem-principal">
                                    <img id='imagem-apresentacao' src="/images/apresentacao.png" alt="ilustração de uma pessoa tirando dúvidas no site" />
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}