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

export default function SobreComponent() {
    const navigation = useNavigate()

    const goToCourses = () => {
        navigation('/course')
    }

    useEffect(() => {
        window.scroll({ top: 1 })
    })

    return (
        <div id="conteudo" >
            <ContainerConteudoComponent>
                <ContainerHeaderComponent containerTitle={'Sobre:'} onClose={() => goToCourses()}></ContainerHeaderComponent>
                <ContainerBodyComponent>

                    <SectionComponent class="intro">
                        <SectionTitleComponent>Sobre o Projeto</SectionTitleComponent>

                        <ParagraphComponent>
                            O projeto <strong>Informática para Todos</strong> foi desenvolvido como parte do
                            <strong> projeto de extensão curricular</strong> do curso de <strong> Análise e Desenvolvimento de Sistemas</strong>.
                            Seu objetivo é oferecer conteúdos educativos e acessíveis sobre temas relacionados à tecnologia e ao uso do computador no dia a dia.
                        </ParagraphComponent>

                        <ParagraphComponent>
                            A proposta é aproximar o conhecimento técnico da comunidade, promovendo inclusão digital e facilitando o aprendizado de ferramentas básicas,
                            como sistemas operacionais, conexões com a internet e configurações do Windows.
                        </ParagraphComponent>

                        <ParagraphComponent>
                            Todo o conteúdo foi elaborado de forma simples e didática, para que qualquer pessoa — mesmo sem experiência prévia com informática —
                            possa compreender e aplicar as informações apresentadas.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="objective">
                        <SectionTitleComponent>Finalidade do Trabalho</SectionTitleComponent>

                        <ParagraphComponent>
                            Este projeto faz parte das atividades práticas de extensão da graduação em
                            <strong> Análise e Desenvolvimento de Sistemas</strong>,
                            com a finalidade de integrar o conhecimento técnico adquirido em sala de aula com o desenvolvimento de soluções úteis à comunidade.
                        </ParagraphComponent>

                        <ParagraphComponent>
                            O foco está em aplicar os conceitos de <strong>desenvolvimento web</strong>, <strong>design responsivo </strong>
                            e <strong>acessibilidade digital</strong> em um ambiente real de aprendizado.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="author">
                        <SectionTitleComponent>Desenvolvedor</SectionTitleComponent>

                        <ParagraphComponent>
                            Este projeto foi idealizado e desenvolvido por <strong>Ryan Galvão</strong>, estudante de
                            <strong> Análise e Desenvolvimento de Sistemas</strong> — <strong>2025</strong>.
                        </ParagraphComponent>

                        <ParagraphComponent>
                            O trabalho reflete o compromisso com a disseminação do conhecimento em tecnologia e o incentivo à inclusão digital,
                            valores fundamentais para a formação de profissionais que compreendem o impacto social da computação.
                        </ParagraphComponent>
                    </SectionComponent>

                    <SectionComponent class="credits">
                        <SectionTitleComponent>Agradecimentos</SectionTitleComponent>

                        <ParagraphComponent>
                            Agradeço à <strong>Universidade Cidade Verde (UNICV)</strong> pela oportunidade de desenvolver este projeto,
                            e aos professores do curso de Análise e Desenvolvimento de Sistemas pelo apoio e orientação durante o processo.
                        </ParagraphComponent>
                    </SectionComponent>
                </ContainerBodyComponent>
            </ContainerConteudoComponent>
        </div>

    )
}