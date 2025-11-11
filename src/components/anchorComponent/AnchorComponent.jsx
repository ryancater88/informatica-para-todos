import './AnchorComponent.styles.css'

export default function AnchorComponent({children, href}) {
    return (
        <a href={href} className="anchor">{children}</a>
    )
}