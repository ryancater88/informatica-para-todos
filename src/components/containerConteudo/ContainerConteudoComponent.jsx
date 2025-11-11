import './ContainerConteudoComponent.styles.css'

export default function ContainerConteudoComponent({ children }) {
    return (
        <div className="main-content">
            <div className="container">
                {children}
            </div>
        </div>
    )
}