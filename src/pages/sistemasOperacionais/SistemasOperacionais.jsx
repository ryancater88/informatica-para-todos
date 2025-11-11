import { useNavigate } from 'react-router-dom'
import AnchorComponent from '../../components/anchorComponent/AnchorComponent'
import ContainerBodyComponent from '../../components/containerBody/ContainerBodyComponent'
import ContainerConteudoComponent from '../../components/containerConteudo/ContainerConteudoComponent'
import ContainerHeaderComponent from '../../components/containerHeader/ContainerHeaderComponent'
import ItemListaComponent from '../../components/itemLista/ItemListaComponent'
import ListComponent from '../../components/listComponent/ListComponent'
import ParagraphComponent from '../../components/paragraphComponent/ParagraphComponent'
import SectionComponent from '../../components/sectionComponent/SectionComponent'
import SectionTitleComponent from '../../components/sectionTitleComponent/SectionTitleComponent'
import './sistemasOperacionais.styles.css'

export default function SistemasOperacionaisCompoenent() {
    const navigation = useNavigate()

    const goToCourses = () => {
        navigation('/course')
    }

    return (
        <div id="conteudo">
            <ContainerConteudoComponent>
                <ContainerHeaderComponent onClose={goToCourses} containerTitle={'Introdução aos sistemas operacionais:'}></ContainerHeaderComponent>
                <ContainerBodyComponent>
                    <SectionComponent class="intro">
                        <SectionTitleComponent>O que são sistemas operacionais?</SectionTitleComponent>
                        <ParagraphComponent>
                            Os <strong>Sistemas Operacionais (SO)</strong> são programas essenciais que permitem que os usuários interajam com os dispositivos de hardware e software de um computador.
                            Eles fazem com que tudo funcione em harmonia — desde o momento em que você liga o computador até quando abre seus programas favoritos.
                            Sem um sistema operacional, o computador seria apenas um conjunto de peças que não se comunicam.
                        </ParagraphComponent>

                        <ParagraphComponent>
                            Alguns exemplos conhecidos de sistemas operacionais são o <strong>Windows</strong>, o <strong>macOS</strong> e o <strong>Linux</strong>.
                            Cada um deles tem suas próprias características, aparência e formas de uso, mas todos cumprem o mesmo papel: fazer o computador funcionar corretamente.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="functions">
                        <SectionTitleComponent>Funções principais dos Sistemas Operacionais</SectionTitleComponent>
                        <ListComponent>
                            <ItemListaComponent><strong>Gerenciamento de Processos:</strong> controla quais programas estão sendo executados e garante que todos recebam o tempo certo do processador.</ItemListaComponent>
                            <ItemListaComponent><strong>Gerenciamento de Memória:</strong> organiza o uso da memória para que os programas não travem e o computador funcione bem.</ItemListaComponent>
                            <ItemListaComponent><strong>Gerenciamento de Arquivos:</strong> cuida da criação, leitura e exclusão de arquivos e pastas.</ItemListaComponent>
                            <ItemListaComponent><strong>Gerenciamento de Dispositivos:</strong> controla impressoras, pendrives, fones de ouvido e todos os outros equipamentos conectados.</ItemListaComponent>
                        </ListComponent>
                    </SectionComponent>

                    <SectionComponent class="examples">
                        <SectionTitleComponent>Exemplos de Sistemas Operacionais</SectionTitleComponent>
                        <div class="operating-systems">
                            <img src="/images/windows.png" alt="Windows" />
                            <img src="/images/linux.png" alt="Linux" />
                            <img src="/images/macos.png" alt="macOS" />
                        </div>
                        <ParagraphComponent>
                            Cada sistema possui suas particularidades, com diferentes objetivos e interfaces.
                            Veja abaixo um resumo simples para entender melhor:
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent>
                                <strong>Windows:</strong> sistema desenvolvido pela Microsoft. É o mais usado no mundo, conhecido pela facilidade de uso e compatibilidade com diversos programas.
                            </ItemListaComponent>
                            <ItemListaComponent>
                                <strong>macOS:</strong> sistema dos computadores da Apple. É estável, bonito e muito usado por profissionais de design, vídeos e música.
                            </ItemListaComponent>
                            <ItemListaComponent>
                                <strong>Linux:</strong> sistema gratuito e aberto. É usado tanto em computadores quanto em servidores. Apesar de parecer técnico, hoje existem versões bem simples de usar, como o Ubuntu.
                            </ItemListaComponent>
                        </ListComponent>
                    </SectionComponent>

                    <SectionComponent class="apps">
                        <SectionTitleComponent>Acessando aplicativos em cada sistema operacional</SectionTitleComponent>
                        <ParagraphComponent>
                            Embora cada sistema operacional tenha sua aparência e menus diferentes, todos permitem abrir programas e aplicativos de forma simples:
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent><strong>Windows:</strong> clique no botão “Iniciar” e digite o nome do programa que deseja abrir.</ItemListaComponent>
                            <ItemListaComponent><strong>macOS:</strong> use o “Spotlight” (ícone de lupa no canto superior direito) ou abra a pasta “Aplicativos”.</ItemListaComponent>
                            <ItemListaComponent><strong>Linux:</strong> use o menu principal ou a barra de busca, dependendo da versão instalada.</ItemListaComponent>
                        </ListComponent>
                    </SectionComponent>

                    <SectionComponent class="files">
                        <SectionTitleComponent>Como gerenciar arquivos?</SectionTitleComponent>
                        <ParagraphComponent>
                            Em qualquer sistema, os arquivos (como fotos, documentos e músicas) são organizados em pastas.
                            O sistema operacional ajuda você a criar, mover e apagar esses arquivos.
                            Veja onde encontrar o gerenciador de arquivos em cada sistema:
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent><strong>Windows:</strong> use o “Explorador de Arquivos”.</ItemListaComponent>
                            <ItemListaComponent><strong>macOS:</strong> use o “Finder”, equivalente ao explorador do Windows.</ItemListaComponent>
                            <ItemListaComponent><strong>Linux:</strong> use o “Gerenciador de Arquivos”, que pode ter nomes diferentes (como “Arquivos” ou “Nautilus”).</ItemListaComponent>
                        </ListComponent>
                    </SectionComponent>

                    <SectionComponent class="differences">
                        <SectionTitleComponent>Particularidades de cada sistema</SectionTitleComponent>
                        <ParagraphComponent>
                            Apesar de terem funções parecidas, os sistemas operacionais possuem vantagens e desvantagens que os tornam únicos:
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent><strong>Windows:</strong> fácil de aprender, compatível com quase todos os programas, mas pode ser mais vulnerável a vírus.</ItemListaComponent>
                            <ItemListaComponent><strong>macOS:</strong> visual moderno e alta segurança, porém disponível apenas em computadores da Apple.</ItemListaComponent>
                            <ItemListaComponent><strong>Linux:</strong> muito seguro, gratuito e personalizável, ideal para quem quer aprender mais sobre tecnologia.</ItemListaComponent>
                        </ListComponent>

                        <ParagraphComponent>
                            Em resumo, todos os sistemas operacionais têm o mesmo objetivo: ajudar o computador a funcionar e permitir que o usuário realize suas tarefas.
                            A principal diferença está no estilo de uso, na aparência e no tipo de público para o qual cada um é mais indicado.
                        </ParagraphComponent>
                    </SectionComponent>
                </ContainerBodyComponent>
            </ContainerConteudoComponent>
        </div>

    )
}