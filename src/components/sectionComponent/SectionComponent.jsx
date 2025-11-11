import './SectionComponent.styles.css'

export default function SectionComponent({children}) {
    return (
        <section className="sectionComponent">{children}</section>
    )
}