import './courseCardComponent.style.css'

export default function CourseCardComponent({titleCourse='', imgSrc=''}) {
    return (
        <>
            <div className="course-card">
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