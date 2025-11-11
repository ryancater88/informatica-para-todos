import './SectionTitleComponent.styles.css'

export default function SectionTitleComponent({children}) {
    return (
        <h2 className="sectionTitle">{children}</h2>
    )
}