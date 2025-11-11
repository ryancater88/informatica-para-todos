import './ParagraphComponent.styles.css'

export default function ParagraphComponent({children}) {
    return (
        <p className="paragraph">{children}</p>
    )
}