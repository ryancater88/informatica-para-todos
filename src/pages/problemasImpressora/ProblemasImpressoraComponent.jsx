import AnchorComponent from '../../components/anchorComponent/AnchorComponent'
import ContainerConteudoComponent from '../../components/containerConteudo/ContainerConteudoComponent'
import ItemListaComponent from '../../components/itemLista/ItemListaComponent'
import ListComponent from '../../components/listComponent/ListComponent'
import ParagraphComponent from '../../components/paragraphComponent/ParagraphComponent'
import SectionComponent from '../../components/sectionComponent/SectionComponent'
import SectionTitleComponent from '../../components/sectionTitleComponent/SectionTitleComponent'
import { useNavigate } from 'react-router-dom'
import ContainerHeaderComponent from '../../components/containerHeader/ContainerHeaderComponent'
import ContainerBodyComponent from '../../components/containerBody/ContainerBodyComponent'


export default function ProblemasImpressoraComponent() {
    const navigation = useNavigate()

    const goToCourses = () => {
        navigation('/course')
    }

    return (
        <div id="conteudo">
            <ContainerConteudoComponent>
                <ContainerHeaderComponent onClose={goToCourses} containerTitle={'Resolvendo os problemas de impressão:'}></ContainerHeaderComponent>
                <ContainerBodyComponent>
                    <SectionComponent class="intro">
                        <SectionTitleComponent>Introdução</SectionTitleComponent>
                        <ParagraphComponent>
                            Mesmo após instalada corretamente, uma impressora pode apresentar diversos problemas.
                            Muitas vezes, essas falhas são simples e podem ser resolvidas com alguns passos básicos, sem precisar de assistência técnica.
                        </ParagraphComponent>

                        <ParagraphComponent>
                            Neste conteúdo, você aprenderá a identificar e resolver os problemas mais comuns que ocorrem em impressoras, tanto conectadas por <strong>USB</strong> quanto por <strong>Wi-Fi</strong>, utilizando o <strong>Windows 10</strong> como referência.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="no-print">
                        <SectionTitleComponent>A impressora não imprime</SectionTitleComponent>

                        <ParagraphComponent>
                            Esse é o problema mais comum e pode ter várias causas, desde falta de papel até falhas de comunicação com o computador.
                            Para corrigir, siga as verificações abaixo:
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent><strong>1. Verifique se a impressora está ligada e conectada</strong> <br /><br />
                                <ListComponent>
                                    <ItemListaComponent>Certifique-se de que o cabo de energia está conectado e o botão de ligar está aceso.</ItemListaComponent>
                                    <ItemListaComponent>Se for uma impressora USB, confira se o cabo está bem encaixado tanto na impressora quanto no computador.</ItemListaComponent>
                                    <ItemListaComponent>Se for uma impressora Wi-Fi, veja se ela está conectada à mesma rede que o computador.</ItemListaComponent>
                                </ListComponent>
                            </ItemListaComponent>


                            <br /><br />

                            <ItemListaComponent><strong>2. Verifique se há papel e tinta</strong> <br /><br />
                                <ListComponent>
                                    <ItemListaComponent>Abra a bandeja de papel e verifique se há folhas disponíveis.</ItemListaComponent>
                                    <ItemListaComponent>Verifique os níveis de tinta ou toner (algumas impressoras exibem essa informação no painel frontal ou no software do fabricante).</ItemListaComponent>
                                </ListComponent>
                            </ItemListaComponent>


                            <br /><br />

                            <ItemListaComponent><strong>3. Verifique a fila de impressão</strong> <br /><br />

                                <ParagraphComponent>
                                    Às vezes, o Windows acumula tarefas de impressão que travam a fila, impedindo novos documentos de serem impressos.
                                </ParagraphComponent>

                                <ListComponent>
                                    <ItemListaComponent>Abra o menu <strong>Iniciar</strong> e vá até <strong>Configurações &gt; Dispositivos &gt; Impressoras e scanners</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Selecione a impressora e clique em <strong>Abrir fila de impressão</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Exclua todos os documentos que estejam travados.</ItemListaComponent>
                                    <ItemListaComponent>Tente imprimir novamente.</ItemListaComponent>
                                </ListComponent>
                            </ItemListaComponent>


                            <br /><br />

                            <ItemListaComponent><strong>4. Reinicie o serviço de spooler de impressão</strong> <br /><br />
                                <ParagraphComponent>
                                    O serviço de <strong>Spooler de Impressão</strong> é responsável por enviar os documentos para a impressora.
                                    Se ele parar de funcionar, a impressora deixará de responder.
                                </ParagraphComponent>

                                <ListComponent>
                                    <ItemListaComponent>Pressione <strong>Windows + R</strong> para abrir o Executar.</ItemListaComponent>
                                    <ItemListaComponent>Digite <strong>services.msc</strong> e pressione <strong>Enter</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Na lista, procure por <strong>Spooler de Impressão</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Clique com o botão direito e selecione <strong>Reiniciar</strong>.</ItemListaComponent>
                                </ListComponent>
                            </ItemListaComponent>

                        </ListComponent>
                    </SectionComponent>

                    <SectionComponent class="offline">
                        <SectionTitleComponent>A impressora aparece como “offline”</SectionTitleComponent>

                        <ParagraphComponent>
                            Quando o Windows mostra que a impressora está “offline”, significa que ele não consegue se comunicar com o equipamento.
                            Isso pode acontecer por falha na conexão ou erro de configuração.
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent><strong>1. Verifique os cabos e conexões Wi-Fi</strong></ItemListaComponent>
                            <ItemListaComponent><strong>2. Reinicie a impressora e o roteador (em caso de impressoras sem fio)</strong></ItemListaComponent>
                            <ItemListaComponent><strong>3. Defina a impressora como padrão</strong> <br /><br />
                                <ListComponent>
                                    <ItemListaComponent>Abra <strong>Configurações &gt; Dispositivos &gt; Impressoras e scanners</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Selecione a impressora e clique em <strong>Gerenciar</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Clique em <strong>Definir como padrão</strong>.</ItemListaComponent>
                                </ListComponent>

                            </ItemListaComponent>

                            <ItemListaComponent><strong>4. Verifique se o modo “Usar impressora offline” está desativado</strong><br /><br />
                                <ListComponent>
                                    <ItemListaComponent>No menu de fila de impressão, clique em <strong>Impressora</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Desmarque a opção <strong>Usar impressora offline</strong>.</ItemListaComponent>
                                </ListComponent>
                            </ItemListaComponent>
                        </ListComponent>
                        <br />
                        <ParagraphComponent>
                            Após essas verificações, o status da impressora deve mudar para “pronta” e o Windows voltará a enviar impressões normalmente.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="slow-print">
                        <SectionTitleComponent>A impressora está lenta</SectionTitleComponent>

                        <ParagraphComponent>
                            Impressões lentas podem ser causadas por arquivos muito grandes, drivers desatualizados ou sinal Wi-Fi fraco.
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent><strong>1. Verifique o tipo de conexão</strong> — impressoras conectadas por cabo costumam imprimir mais rápido do que as sem fio.</ItemListaComponent>
                            <ItemListaComponent><strong>2. Atualize os drivers</strong> — acesse o site do fabricante da impressora e baixe o driver mais recente.</ItemListaComponent>
                            <ItemListaComponent><strong>3. Use a qualidade de impressão normal</strong> — na janela de impressão, evite selecionar o modo “alta qualidade”, pois ele consome mais tempo e tinta.</ItemListaComponent>
                            <ItemListaComponent><strong>4. Evite imprimir imagens grandes ou documentos com muitas páginas de uma só vez.</strong></ItemListaComponent>
                        </ListComponent>
                    </SectionComponent>

                    <SectionComponent class="paper-jam">
                        <SectionTitleComponent>Papel preso (atolamento de papel)</SectionTitleComponent>

                        <ParagraphComponent>
                            Quando o papel fica preso dentro da impressora, o sistema geralmente exibe uma mensagem de erro.
                            O ideal é remover o papel com cuidado para evitar danos aos componentes internos.
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent>1. Desligue a impressora.</ItemListaComponent>
                            <ItemListaComponent>2. Abra as tampas indicadas pelo fabricante.</ItemListaComponent>
                            <ItemListaComponent>3. Puxe o papel preso com cuidado, sem rasgar.</ItemListaComponent>
                            <ItemListaComponent>4. Verifique se não ficou nenhum pedaço de papel no caminho de impressão.</ItemListaComponent>
                            <ItemListaComponent>5. Ligue novamente e faça um teste de impressão.</ItemListaComponent>
                        </ListComponent>
                    </SectionComponent>

                    <SectionComponent class="ink-issues">
                        <SectionTitleComponent>Problemas com tinta ou toner</SectionTitleComponent>

                        <ParagraphComponent>
                            Se as impressões estiverem saindo fracas, manchadas ou com falhas, o problema pode estar na tinta ou no cartucho de toner.
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent><strong>1. Verifique o nível de tinta</strong> no software da impressora ou no painel frontal.</ItemListaComponent>
                            <ItemListaComponent><strong>2. Agite levemente o cartucho de toner</strong> (para impressoras a laser) para redistribuir o pó interno.</ItemListaComponent>
                            <ItemListaComponent><strong>3. Realize a limpeza dos cabeçotes de impressão</strong> (nas impressoras jato de tinta).</ItemListaComponent>

                            <ItemListaComponent>Para realizar a limpeza: <br /><br />
                                <ListComponent>
                                    <ItemListaComponent>Abra o menu <strong>Iniciar</strong> e vá até <strong>Configurações &gt; Dispositivos &gt; Impressoras e scanners</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Selecione sua impressora e clique em <strong>Gerenciar</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Clique em <strong>Preferências de impressão</strong> e procure a opção <strong>Limpeza de cabeçote</strong> ou <strong>Manutenção</strong>.</ItemListaComponent>
                                </ListComponent>
                            </ItemListaComponent>
                        </ListComponent>
                    </SectionComponent>

                    <SectionComponent class="conclusion">
                        <SectionTitleComponent>Conclusão</SectionTitleComponent>

                        <ParagraphComponent>
                            A maioria dos problemas com impressoras tem soluções simples e podem ser resolvidas em poucos minutos.
                            Verificar conexões, fila de impressão e realizar manutenções básicas costuma eliminar a maior parte dos erros.
                        </ParagraphComponent>

                        <ParagraphComponent>
                            Manter os drivers atualizados e utilizar sempre tinta ou toner originais também ajuda a evitar falhas e prolonga a vida útil do equipamento.
                        </ParagraphComponent>
                    </SectionComponent>
                </ContainerBodyComponent>
            </ContainerConteudoComponent>
        </div>

    )
}