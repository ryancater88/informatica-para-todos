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
import { useEffect } from 'react'

export default function ConectandoInternetComponent() {
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
                <ContainerHeaderComponent onClose={goToCourses} containerTitle={'Como se conectar na internet:'}></ContainerHeaderComponent>
                <ContainerBodyComponent>

                    <SectionComponent class="intro">
                        <SectionTitleComponent>Introdução</SectionTitleComponent>
                        <ParagraphComponent>
                            Conectar-se à internet é uma das tarefas mais comuns no uso de um computador.
                            No entanto, muitas pessoas ainda têm dúvidas sobre como isso acontece e quais são as formas possíveis de se conectar.
                        </ParagraphComponent>

                        <ParagraphComponent>
                            Neste conteúdo, vamos aprender de forma simples como realizar a conexão à internet utilizando o <strong>Windows 10</strong>, seja por <strong>cabo de rede</strong> ou por <strong>Wi-Fi</strong>, além de entender o que é o <strong>DHCP</strong> e por que ele é importante.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="wired">
                        <SectionTitleComponent>Realizando a conexão por cabo</SectionTitleComponent>

                        <ParagraphComponent>
                            A conexão por <strong>cabo de rede</strong> (também chamada de conexão via Ethernet) é uma das formas mais estáveis de acessar a internet.
                            Ela utiliza um cabo físico, normalmente de cor azul ou cinza, que liga o computador diretamente ao roteador ou modem.
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent><strong>1.</strong> Conecte uma das pontas do cabo na entrada de rede do computador.</ItemListaComponent>
                            <ItemListaComponent><strong>2.</strong> Conecte a outra ponta em uma porta livre do roteador ou modem.</ItemListaComponent>
                            <ItemListaComponent><strong>3.</strong> O Windows 10 detectará automaticamente a conexão e mostrará um ícone de rede na barra inferior, próximo ao relógio.</ItemListaComponent>
                        </ListComponent>

                        <ParagraphComponent>
                            Se tudo estiver correto, o computador se conectará à internet automaticamente.
                            Caso contrário, verifique se o cabo está bem encaixado ou se o roteador está ligado.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="wifi">
                        <SectionTitleComponent>Realizando a conexão via Wi-Fi</SectionTitleComponent>

                        <ParagraphComponent>
                            A conexão sem fio, conhecida como <strong>Wi-Fi</strong>, é a forma mais prática de se conectar à internet, especialmente em notebooks e dispositivos móveis.
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent><strong>1.</strong> Clique no ícone de rede (parecido com ondas de rádio) na barra inferior do Windows 10.</ItemListaComponent>
                            <ItemListaComponent><strong>2.</strong> Uma lista com as redes disponíveis será exibida.</ItemListaComponent>
                            <ItemListaComponent><strong>3.</strong> Escolha a rede desejada e clique em <strong>Conectar</strong>.</ItemListaComponent>
                            <ItemListaComponent><strong>4.</strong> Digite a senha (caso a rede seja protegida) e aguarde a confirmação de conexão.</ItemListaComponent>
                        </ListComponent>

                        <ParagraphComponent>
                            Após a conexão, o ícone de rede mudará e mostrará que o computador está online.
                            A partir daí, você já pode abrir o navegador e acessar qualquer site.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="dhcp">
                        <SectionTitleComponent>Uso de DHCP (Básico)</SectionTitleComponent>

                        <ParagraphComponent>
                            Quando nos conectamos à internet, seja por cabo ou Wi-Fi, o computador precisa de um <strong>endereço IP</strong> para se comunicar com outros dispositivos na rede.
                            Esse endereço é como o “número da casa” do computador dentro da rede.
                        </ParagraphComponent>

                        <ParagraphComponent>
                            O <strong>DHCP (Dynamic Host Configuration Protocol)</strong> é o recurso que faz essa configuração automaticamente.
                            Em vez de você precisar digitar o endereço manualmente, o DHCP faz isso de forma automática, garantindo que o computador receba:
                        </ParagraphComponent>

                        <ListComponent>
                            <ItemListaComponent>- Um endereço IP válido.</ItemListaComponent>
                            <ItemListaComponent>- Máscara de rede (que ajuda a identificar os limites da rede).</ItemListaComponent>
                            <ItemListaComponent>- Gateway (que permite o acesso à internet).</ItemListaComponent>
                        </ListComponent>

                        <ParagraphComponent>
                            No Windows 10, o DHCP já vem ativado por padrão.
                            Assim, basta conectar o cabo ou acessar uma rede Wi-Fi e o próprio sistema cuida de obter o endereço IP automaticamente.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="tips">
                        <SectionTitleComponent>Dicas importantes</SectionTitleComponent>

                        <ListComponent>
                            <ItemListaComponent>Se a internet não funcionar, verifique se o <strong>roteador está ligado</strong> e se os cabos estão conectados corretamente.</ItemListaComponent>
                            <ItemListaComponent>Se o ícone de rede tiver um símbolo de alerta (um triângulo amarelo), pode haver um problema na conexão com o roteador.</ItemListaComponent>
                            <ItemListaComponent>Reiniciar o computador ou o roteador pode resolver falhas simples de conexão.</ItemListaComponent>
                            <ItemListaComponent>Certifique-se de que o <strong>modo avião</strong> não está ativado, pois ele desativa o Wi-Fi.</ItemListaComponent>
                        </ListComponent>

                        <ParagraphComponent>
                            Seguindo esses passos, você conseguirá se conectar à internet de forma simples e rápida utilizando o Windows 10.
                        </ParagraphComponent>
                    </SectionComponent>
                </ContainerBodyComponent>
            </ContainerConteudoComponent>
        </div>

    )
}