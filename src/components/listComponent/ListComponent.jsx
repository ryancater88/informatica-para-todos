import './ListComponent.styles.css'

export default function ListComponent({children}) {
    return (
        <ul className="list">{children}</ul>
    )
}