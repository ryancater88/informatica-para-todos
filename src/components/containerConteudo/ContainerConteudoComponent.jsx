import './ContainerConteudoComponent.styles.css'

export default function ContainerConteudoComponent({children}) {
    return (
        <div className="main-content">
            {children}
        </div>
    )
}