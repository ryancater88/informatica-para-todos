import { useNavigate } from 'react-router-dom'
import './courseCardComponent.style.css'

export default function CourseCardComponent({titleCourse='', imgSrc='', ref}) {
    const navigate = useNavigate()

    const goToComponent = () => {
        if(!ref) return
        navigate(ref)
    }

    return (
        <>
            <div className="course-card" onClick={() => goToComponent()}>
                <div className="course-card__image">
                    <img id='logo' src={imgSrc}/>
                </div>
                <div className="course-card__title">
                    <h3>{titleCourse.toUpperCase()}</h3>
                </div>
            </div>
        </>
    )
}