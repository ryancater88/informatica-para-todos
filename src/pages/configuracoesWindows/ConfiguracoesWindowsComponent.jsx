import { useNavigate } from 'react-router-dom'
import AnchorComponent from '../../components/anchorComponent/AnchorComponent'
import ContainerConteudoComponent from '../../components/containerConteudo/ContainerConteudoComponent'
import ItemListaComponent from '../../components/itemLista/ItemListaComponent'
import ListComponent from '../../components/listComponent/ListComponent'
import ParagraphComponent from '../../components/paragraphComponent/ParagraphComponent'
import SectionComponent from '../../components/sectionComponent/SectionComponent'
import SectionTitleComponent from '../../components/sectionTitleComponent/SectionTitleComponent'
import ContainerHeaderComponent from '../../components/containerHeader/ContainerHeaderComponent'
import ContainerBodyComponent from '../../components/containerBody/ContainerBodyComponent'

export default function ConfiguracoesWindowsComponent() {
    const navigation = useNavigate()

    const goToCourses = () => {
        navigation('/course')
    }

    return (
        <div id="conteudo" >
            <ContainerConteudoComponent>
                <ContainerHeaderComponent onClose={goToCourses} containerTitle={'Principais configurações do Windows:'}></ContainerHeaderComponent>
                <ContainerBodyComponent>
                    <SectionComponent class="intro">
                        <SectionTitleComponent>Introdução</SectionTitleComponent>
                        <ParagraphComponent>
                            O <strong>Windows</strong> é um sistema operacional cheio de recursos que permitem personalizar a forma como você usa o computador.
                            Saber onde ficam e como funcionam as principais configurações é essencial para deixar o computador mais confortável, acessível e eficiente.
                        </ParagraphComponent>

                        <ParagraphComponent>
                            Nesta aula, veremos as principais configurações do Windows 10 que ajudam a ajustar a tela, melhorar a acessibilidade, trabalhar com mais de um monitor e otimizar o desempenho em computadores mais simples.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="display">
                        <SectionTitleComponent>Configurações de exibição</SectionTitleComponent>

                        <ParagraphComponent>
                            A área de exibição é responsável por tudo o que aparece no monitor: brilho, resolução e tamanho dos elementos da tela.
                            Ajustar essas opções pode melhorar muito a leitura e o conforto visual.
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent>Acesse o menu <strong>Iniciar</strong> e clique em <strong>Configurações &gt; Sistema &gt; Vídeo</strong>.</ItemListaComponent>
                            <ItemListaComponent>Em <strong>Brilho e cor</strong>, você pode ajustar o brilho da tela ou ativar o modo noturno para reduzir o cansaço visual.</ItemListaComponent>
                            <ItemListaComponent>Na seção <strong>Escala e layout</strong>, é possível alterar o tamanho de textos e ícones (útil para telas pequenas ou grandes).</ItemListaComponent>
                            <ItemListaComponent>Em <strong>Resolução de tela</strong>, mantenha sempre a opção “Recomendada” para garantir a melhor nitidez possível.</ItemListaComponent>
                        </ListComponent>

                        <ParagraphComponent>
                            Essas configurações são especialmente úteis para quem usa o computador por longos períodos ou em ambientes com muita luz.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="dual-screen">
                        <SectionTitleComponent>Trabalhando com duas telas</SectionTitleComponent>

                        <ParagraphComponent>
                            Conectar um segundo monitor é uma forma prática de aumentar o espaço de trabalho, facilitando o uso de vários programas ao mesmo tempo.
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent>Conecte o segundo monitor ao computador usando um cabo HDMI, VGA ou DisplayPort.</ItemListaComponent>
                            <ItemListaComponent>No teclado, pressione <strong>Windows + P</strong> para abrir as opções de exibição.</ItemListaComponent>
                            <ItemListaComponent>Escolha uma das opções:<br /><br />
                                <ListComponent>
                                    <ItemListaComponent><strong>Duplicar:</strong> mostra a mesma imagem nas duas telas.</ItemListaComponent><br />
                                    <ItemListaComponent><strong>Estender:</strong> cria uma área de trabalho maior, permitindo arrastar janelas de uma tela para outra.</ItemListaComponent><br />
                                    <ItemListaComponent><strong>Somente segunda tela:</strong> desliga o monitor principal e usa apenas o outro.</ItemListaComponent>
                                </ListComponent>
                            </ItemListaComponent>
                        </ListComponent>

                        <ParagraphComponent>
                            Essa função é ideal para quem trabalha com planilhas, apresentações, edições de vídeo ou precisa acompanhar várias janelas ao mesmo tempo.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="accessibility">
                        <SectionTitleComponent>Acessibilidade</SectionTitleComponent>

                        <ParagraphComponent>
                            O Windows possui várias ferramentas para ajudar pessoas com diferentes necessidades a utilizarem o computador com mais facilidade.
                            Mesmo quem não possui limitações pode aproveitar esses recursos para deixar o uso mais confortável.
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent>Acesse <strong>Configurações &gt; Acessibilidade</strong> (ou “Facilidade de Acesso” em algumas versões).</ItemListaComponent>
                            <ItemListaComponent>Ative o <strong>Narrador</strong> para que o computador leia textos e botões na tela.</ItemListaComponent>
                            <ItemListaComponent>Use a <strong>Lupa</strong> para ampliar partes específicas da tela.</ItemListaComponent>
                            <ItemListaComponent>Ative as <strong>Teclas de Aderência</strong> para digitar atalhos com mais calma (pressionando uma tecla por vez).</ItemListaComponent>
                            <ItemListaComponent>Altere o contraste e o tamanho da fonte para melhorar a leitura.</ItemListaComponent>
                        </ListComponent>

                        <ParagraphComponent>
                            Essas configurações tornam o Windows mais inclusivo e adaptável, garantindo que qualquer pessoa possa utilizá-lo confortavelmente.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="performance">
                        <SectionTitleComponent>Otimizando desempenho para hardware modesto</SectionTitleComponent>

                        <ParagraphComponent>
                            Em computadores mais simples, algumas alterações nas configurações podem deixar o sistema mais leve e rápido, sem precisar trocar peças.
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent>No menu <strong>Iniciar</strong>, procure por <strong>Desempenho</strong> e clique em <strong>Ajustar a aparência e o desempenho do Windows</strong>.</ItemListaComponent>
                            <ItemListaComponent>Na janela aberta, selecione a opção <strong>Ajustar para obter um melhor desempenho</strong>.</ItemListaComponent>
                            <ItemListaComponent>Isso desativa animações e efeitos visuais que consomem recursos, tornando o sistema mais leve.</ItemListaComponent>
                            <ItemListaComponent>Em <strong>Configurações &gt; Aplicativos &gt; Inicialização</strong>, desative os programas que iniciam junto com o Windows e que você não usa com frequência.</ItemListaComponent>
                            <ItemListaComponent>Manter o Windows atualizado e o disco rígido limpo também ajuda no desempenho.</ItemListaComponent>
                        </ListComponent>

                        <ParagraphComponent>
                            Essas mudanças fazem grande diferença em máquinas com pouca memória RAM ou processadores mais antigos, deixando o sistema mais rápido e estável.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="conclusion">
                        <SectionTitleComponent>Resumo</SectionTitleComponent>

                        <ParagraphComponent>
                            Compreender e ajustar as principais configurações do Windows é uma forma de tornar o computador mais agradável e eficiente.
                            Pequenas mudanças em brilho, desempenho e acessibilidade podem melhorar significativamente sua experiência de uso.
                        </ParagraphComponent>
                    </SectionComponent>
                </ContainerBodyComponent>
            </ContainerConteudoComponent>
        </div>

    )
}