import './ItemListaComponent.styles.css'

export default function ItemListaComponent({children}) {
    return (
        <li className="item-lista">{children}</li>
    )
}