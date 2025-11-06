import CourseCardComponent from "../../components/courseCard/CourseCardComponent";
import './courses.style.css'


export function CoursesComponent() {
    return (
        <div id="conteudo">
            <section id="courses">
                <div className="container-courses">
                    <CourseCardComponent
                        titleCourse="Introdução aos sistemas operacionais"
                        imgSrc="images/sistemasoperacionais.png"
                        ref='/course/so'
                    />
                    <CourseCardComponent
                        titleCourse="Como se conectar na internet"
                        imgSrc="images/internet.png"
                        ref='/home'
                    />
                    <CourseCardComponent
                        titleCourse="Resolvendo os problemas de conexão"
                        imgSrc="images/interneterrors.png"
                        ref='/home'
                    />
                    <CourseCardComponent
                        titleCourse="Principais configurações do Windows"
                        imgSrc="images/windowsconfigs.png"
                        ref='/home'
                    />
                    <CourseCardComponent
                        titleCourse="Instalando uma impressora"
                        imgSrc="images/addprinter.png"
                        ref='/home'
                    />
                    <CourseCardComponent
                        titleCourse="Resolvendo os problemas de impressão"
                        imgSrc="images/fixprinter.png"
                        ref='/home'
                    />
                </div>
            </section>
        </div>
    )
}