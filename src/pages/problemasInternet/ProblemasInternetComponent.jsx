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


export default function ProblemasInternetComponent() {
    const navigation = useNavigate()

    const goToCourses = () => {
        navigation('/course')
    }

    return (
        <div id="conteudo">
            <ContainerConteudoComponent>
                <ContainerHeaderComponent onClose={goToCourses} containerTitle={'Resolvendo os problemas de conexão:'}></ContainerHeaderComponent>
                <ContainerBodyComponent>
                    <SectionComponent class="intro">
                        <SectionTitleComponent>Introdução</SectionTitleComponent>

                        <ParagraphComponent>
                            Às vezes, a internet simplesmente para de funcionar — e isso pode acontecer por vários motivos.
                            Neste conteúdo, vamos mostrar de forma simples como identificar e resolver os problemas de conexão mais comuns.
                        </ParagraphComponent>

                        <ParagraphComponent>
                            Vamos utilizar o <strong>Windows 10</strong> como exemplo, mas as orientações também valem para outros sistemas operacionais.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="problems">
                        <SectionTitleComponent>O que fazer quando a internet não funcionar?</SectionTitleComponent>

                        <ParagraphComponent>
                            Quando a internet não conecta, o primeiro passo é manter a calma e seguir uma sequência de verificações simples.
                            Muitas vezes, o problema está em algo fácil de resolver.
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent><strong>1. Verificar em outros dispositivos</strong></ItemListaComponent>
                        </ListComponent>

                        <ParagraphComponent>
                            Tente abrir algum site em outro computador ou celular conectado à mesma rede.
                            - Se nenhum aparelho conseguir acessar a internet, o problema provavelmente está no <strong>roteador</strong> ou na <strong>operadora</strong>.
                            - Se apenas o seu computador estiver sem internet, o problema está nas <strong>configurações locais</strong>.
                        </ParagraphComponent>

                        <br /><br />

                        <ListComponent>
                            <ItemListaComponent><strong>2. Reiniciar aparelhos</strong></ItemListaComponent>
                        </ListComponent>

                        <ParagraphComponent>
                            Esse é um dos métodos mais simples e eficazes.
                            Desligue o <strong>roteador</strong> e o <strong>computador</strong>, aguarde cerca de 30 segundos e ligue-os novamente.
                            Isso força a reconexão da rede e pode corrigir falhas temporárias.
                        </ParagraphComponent>

                        <br /><br />

                        <ListComponent>
                            <ItemListaComponent><strong>3. Verificar configurações de DNS</strong></ItemListaComponent>

                            <ParagraphComponent>
                                O DNS é o sistema que traduz os nomes dos sites (como <em>www.google.com</em>) em endereços que o computador entende.
                                Se o DNS estiver com erro, os sites podem não abrir mesmo que a conexão pareça ativa.
                            </ParagraphComponent>

                            <ItemListaComponent>Para ajustar o DNS no Windows 10: <br /><br />
                                <ListComponent>
                                    <ItemListaComponent>Abra o menu <strong>Iniciar</strong> e acesse <strong>Configurações &gt; Rede e Internet</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Clique em <strong>Alterar opções de adaptador</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Com o botão direito, selecione <strong>Propriedades</strong> na sua conexão de rede.</ItemListaComponent>
                                    <ItemListaComponent>Escolha <strong>Protocolo IP Versão 4 (TCP/IPv4)</strong> e clique em <strong>Propriedades</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Marque a opção <strong>Usar os seguintes endereços de servidor DNS</strong> e insira:<br /><br />
                                        <ListComponent>
                                            <ItemListaComponent>DNS preferencial: <strong>8.8.8.8</strong></ItemListaComponent>
                                            <ItemListaComponent>DNS alternativo: <strong>8.8.4.4</strong> (DNS público do Google)</ItemListaComponent>
                                        </ListComponent>
                                    </ItemListaComponent>
                                </ListComponent>


                                <ParagraphComponent>
                                    Clique em <strong>OK</strong> e feche as janelas.
                                    Em seguida, teste novamente o acesso à internet.
                                </ParagraphComponent>

                            </ItemListaComponent>
                        </ListComponent>

                        <br /><br />

                        <ListComponent>
                            <ItemListaComponent><strong>4. Verificar configurações de proxy</strong></ItemListaComponent>

                            <ParagraphComponent>
                                O proxy é um tipo de configuração usada em redes corporativas, mas em casa ele normalmente deve estar <strong>desativado</strong>.
                                Se o proxy estiver ativo por engano, pode impedir o computador de acessar a internet.
                            </ParagraphComponent>

                            <ItemListaComponent>Para verificar:<br /><br />
                                <ListComponent>
                                    <ItemListaComponent>Abra o menu <strong>Iniciar</strong> e acesse <strong>Configurações &gt; Rede e Internet &gt; Proxy</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Desative as opções <strong>Detectar configurações automaticamente</strong> e <strong>Usar servidor proxy</strong> (se estiverem ativadas).</ItemListaComponent>
                                </ListComponent>
                            </ItemListaComponent>

                            <ParagraphComponent>
                                Após isso, feche as janelas e teste a conexão novamente.
                            </ParagraphComponent>
                        </ListComponent>

                        <br /><br />

                        <ListComponent>
                            <ItemListaComponent><strong>5. Bloqueios por antivírus e firewall</strong></ItemListaComponent>

                            <ParagraphComponent>
                                Alguns programas de segurança, como antivírus e firewalls, podem bloquear a conexão por engano.
                                Se você instalou recentemente um novo antivírus e a internet parou de funcionar, ele pode ser o causador do problema.
                            </ParagraphComponent>
                            <ItemListaComponent>
                                <ListComponent>Nesse caso: <br /><br />
                                    <ItemListaComponent>Tente <strong>desativar temporariamente</strong> o antivírus e veja se a internet volta a funcionar.</ItemListaComponent>
                                    <ItemListaComponent>Se o problema for resolvido, acesse as configurações do antivírus e <strong>libere o acesso à rede</strong>.</ItemListaComponent>
                                    <ItemListaComponent>Evite deixar o antivírus desligado por muito tempo, para não comprometer a segurança do computador.</ItemListaComponent>
                                </ListComponent>
                            </ItemListaComponent>
                        </ListComponent>
                    </SectionComponent>

                    <SectionComponent class="final-tips">
                        <SectionTitleComponent>Dicas adicionais</SectionTitleComponent>

                        <ListComponent>
                            <ItemListaComponent>Se a conexão cair com frequência, pode haver interferência no sinal do Wi-Fi — tente aproximar o computador do roteador.</ItemListaComponent>
                            <ItemListaComponent>Verifique se o cabo de rede não está danificado ou frouxo.</ItemListaComponent>
                            <ItemListaComponent>Execute o <strong>Solucionador de Problemas de Rede</strong> do próprio Windows, que pode detectar e corrigir erros automaticamente.</ItemListaComponent>
                        </ListComponent>

                        <ParagraphComponent>
                            Seguindo essas orientações, você será capaz de resolver a maioria dos problemas de conexão de forma simples e segura.
                        </ParagraphComponent>
                    </SectionComponent>
                </ContainerBodyComponent>
            </ContainerConteudoComponent>
        </div>

    )
}