import './ContainerBodyComponent.styles.css'

export default function ContainerBodyComponent({ children }) {
    return (
        <div className="container-body">
            {children}
        </div>
    )
}