import AnchorComponent from '../../components/anchorComponent/AnchorComponent'
import ContainerConteudoComponent from '../../components/containerConteudo/ContainerConteudoComponent'
import ItemListaComponent from '../../components/itemLista/ItemListaComponent'
import ListComponent from '../../components/listComponent/ListComponent'
import ParagraphComponent from '../../components/paragraphComponent/ParagraphComponent'
import SectionComponent from '../../components/sectionComponent/SectionComponent'
import SectionTitleComponent from '../../components/sectionTitleComponent/SectionTitleComponent'
import ContainerHeaderComponent from '../../components/containerHeader/ContainerHeaderComponent'
import ContainerBodyComponent from '../../components/containerBody/ContainerBodyComponent'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function InstalandoImpressoraComponent() {
    const navigation = useNavigate()

    const goToCourses = () => {
        navigation('/course')
    }

    useEffect(() => {
        window.scroll({ top: 1 })
    })


    return (
        <div id="conteudo">
            <ContainerConteudoComponent>
                <ContainerHeaderComponent onClose={goToCourses} containerTitle={'Instalando uma impressora:'}></ContainerHeaderComponent>
                <ContainerBodyComponent>
                    <SectionComponent class="intro">
                        <SectionTitleComponent>Introdução</SectionTitleComponent>
                        <ParagraphComponent>
                            Instalar uma impressora é uma das tarefas mais comuns no dia a dia, mas que ainda gera dúvidas em muitos usuários.
                            Com o <strong>Windows 10</strong>, o processo é simples e pode ser feito de forma automática ou manual, dependendo do tipo de impressora.
                        </ParagraphComponent>

                        <ParagraphComponent>
                            Neste conteúdo, você aprenderá passo a passo como instalar uma impressora no Windows, seja ela conectada por <strong>cabo USB</strong> ou por <strong>Wi-Fi</strong>.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="methods">
                        <SectionTitleComponent>Métodos de instalação</SectionTitleComponent>

                        <ParagraphComponent>
                            Existem diferentes formas de instalar uma impressora no Windows. A escolha do método depende do tipo de conexão que ela utiliza.
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent><strong>1. Instalação automática (plug and play)</strong></ItemListaComponent>

                            <ParagraphComponent>
                                Esse é o método mais simples e é usado na maioria das impressoras modernas.
                                O próprio Windows reconhece o dispositivo e instala os drivers necessários. <br /><br />
                                <ListComponent>
                                    <ItemListaComponent>Conecte a impressora ao computador usando o <strong>cabo USB</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Ligue a impressora.</ItemListaComponent>
                                    <ItemListaComponent>O Windows detectará automaticamente o novo dispositivo e instalará os drivers.</ItemListaComponent>
                                    <ItemListaComponent>Quando a instalação terminar, uma mensagem aparecerá confirmando que a impressora está pronta para uso.</ItemListaComponent>
                                </ListComponent>
                            </ParagraphComponent>


                            <ParagraphComponent>
                                Caso o Windows não reconheça a impressora automaticamente, siga os próximos métodos.
                            </ParagraphComponent>

                            <br /><br />

                            <ItemListaComponent><strong>2. Instalação manual pelo painel de configurações</strong></ItemListaComponent>

                            <ParagraphComponent>
                                Quando a instalação automática não funcionar, você pode adicionar a impressora manualmente pelas configurações do Windows. <br /><br />
                                <ListComponent>
                                    <ItemListaComponent>Abra o menu <strong>Iniciar</strong> e acesse <strong>Configurações &gt; Dispositivos &gt; Impressoras e scanners</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Clique em <strong>Adicionar uma impressora ou scanner</strong>.</ItemListaComponent>
                                    <ItemListaComponent>O Windows buscará impressoras próximas. Caso encontre, clique em <strong>Adicionar dispositivo</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Se a impressora não aparecer, clique em <strong>A impressora que eu quero não está listada</strong> e siga as opções avançadas.</ItemListaComponent>
                                </ListComponent>
                            </ParagraphComponent>

                            <br /><br />

                            <ItemListaComponent><strong>3. Instalação de impressora via Wi-Fi</strong></ItemListaComponent>

                            <ParagraphComponent>
                                Muitas impressoras modernas funcionam sem fio, usando a rede Wi-Fi.
                                Para que isso funcione, é necessário que a impressora e o computador estejam conectados à mesma rede. <br /><br />
                                <ListComponent>
                                    <ItemListaComponent>Conecte a impressora à sua rede Wi-Fi (geralmente, isso é feito no painel da própria impressora).</ItemListaComponent>
                                    <ItemListaComponent>Verifique se o computador também está conectado à mesma rede.</ItemListaComponent>
                                    <ItemListaComponent>Abra <strong>Configurações &gt; Dispositivos &gt; Impressoras e scanners</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Clique em <strong>Adicionar uma impressora ou scanner</strong> e aguarde o Windows detectar a impressora sem fio.</ItemListaComponent>
                                    <ItemListaComponent>Selecione o nome da impressora e clique em <strong>Adicionar dispositivo</strong>.</ItemListaComponent>
                                </ListComponent>
                            </ParagraphComponent>

                            <br /><br />

                            <ItemListaComponent><strong>4. Instalação usando o software do fabricante</strong></ItemListaComponent>

                            <ParagraphComponent>
                                Alguns fabricantes, como HP, Epson, Canon e Brother, disponibilizam programas próprios para instalação e configuração das impressoras.
                                Esses programas podem oferecer mais recursos e facilitar o processo. <br /><br />
                                <ListComponent>
                                    <ItemListaComponent>Acesse o site oficial do fabricante da sua impressora.</ItemListaComponent>
                                    <ItemListaComponent>Baixe o software ou driver correspondente ao modelo da sua impressora e ao sistema operacional (Windows 10, por exemplo).</ItemListaComponent>
                                    <ItemListaComponent>Execute o instalador e siga as instruções na tela.</ItemListaComponent>
                                    <ItemListaComponent>Ao final, o programa configurará automaticamente a impressora e testará a conexão.</ItemListaComponent>
                                </ListComponent>
                            </ParagraphComponent>

                        </ListComponent>
                    </SectionComponent>

                    <SectionComponent class="tips">
                        <SectionTitleComponent>Dicas importantes</SectionTitleComponent>

                        <ListComponent>
                            <ItemListaComponent>Certifique-se de que a impressora está ligada e com papel e tinta suficientes antes da instalação.</ItemListaComponent>
                            <ItemListaComponent>Se a impressora for Wi-Fi, mantenha-a próxima do roteador durante a configuração.</ItemListaComponent>
                            <ItemListaComponent>Use sempre os drivers oficiais do fabricante para evitar problemas de compatibilidade.</ItemListaComponent>
                            <ItemListaComponent>Se a impressora não funcionar mesmo após instalada, reinicie o computador e tente imprimir novamente.</ItemListaComponent>
                            <ItemListaComponent>Para impressoras antigas, pode ser necessário baixar manualmente os drivers no site do fabricante.</ItemListaComponent>
                        </ListComponent>
                    </SectionComponent>

                    <SectionComponent class="troubleshooting">
                        <SectionTitleComponent>Resolvendo problemas de instalação</SectionTitleComponent>

                        <ParagraphComponent>
                            Caso a impressora não funcione após seguir os passos anteriores, o problema pode estar em drivers, cabos ou permissões do Windows.
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent>1. Verifique se o <strong>cabo USB</strong> está bem conectado.</ItemListaComponent>
                            <ItemListaComponent>2. Teste a impressora em outra porta USB ou outro computador.</ItemListaComponent>
                            <ItemListaComponent>3. No Windows, acesse <strong>Gerenciador de Dispositivos</strong> e veja se há algum item com alerta (ícone amarelo).</ItemListaComponent>
                            <ItemListaComponent>4. Se houver, clique com o botão direito e selecione <strong>Atualizar driver</strong>.</ItemListaComponent>
                            <ItemListaComponent>5. Reinicie o computador após as alterações.</ItemListaComponent>
                        </ListComponent>

                        <ParagraphComponent>
                            Se mesmo assim não funcionar, reinstale o driver do fabricante ou procure o suporte técnico da marca.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="conclusion">
                        <SectionTitleComponent>Conclusão</SectionTitleComponent>

                        <ParagraphComponent>
                            Instalar uma impressora no Windows 10 é um processo simples e rápido.
                            Com poucos passos, é possível configurar impressoras USB, Wi-Fi ou até modelos mais antigos.
                            Lembre-se sempre de usar os drivers oficiais e manter o sistema atualizado para garantir o melhor funcionamento.
                        </ParagraphComponent>
                    </SectionComponent>
                </ContainerBodyComponent>
            </ContainerConteudoComponent>

        </div>

    )
}