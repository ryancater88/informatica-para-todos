import './sistemasOperacionais.styles.css'

export default function SistemasOperacionaisCompoenent() {
    return (
        <div id="conteudo">
            <div class="main-content">
                <section class="intro">
                    <p>Sistemas Operacionais (SO) são programas essenciais que permitem que os usuários interajam com os dispositivos de hardware e software de um computador...</p>
                </section>

                <section class="functions">
                    <h2>Funções principais dos Sistemas Operacionais</h2>
                    <ul>
                        <li>Gerenciamento de Processos</li>
                        <li>Gerenciamento de Memória</li>
                        <li>Gerenciamento de Arquivos</li>
                        <li>Gerenciamento de Dispositivos</li>
                    </ul>
                </section>
                <section class="examples">
                    <h2>Exemplos de Sistemas Operacionais</h2>
                    <div class="operating-systems">
                        <img src="windows.png" alt="Windows" />
                        <img src="linux.png" alt="Linux" />
                        <img src="macos.png" alt="macOS" />
                    </div>
                    <p>Cada sistema possui características próprias, com diferentes objetivos e interfaces...</p>
                </section>

                <section class="tutorials">
                    <h2>Assista ao vídeo sobre Sistemas Operacionais</h2>
                    <a href="tutorial-link.com">Acesse o tutorial completo</a>
                </section>
            </div>
        </div>

    )
}