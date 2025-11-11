import './ContainerHeaderComponent.styles.css'

export default function ContainerHeaderComponent({ containerTitle, onClose }) {
    const closeContainer = () => {
        if (onClose && typeof onClose == 'function') onClose()
    }

    return (
        <div className="container-header">
            <div className="container-header__title">
                <p>{containerTitle}</p>
            </div>
            <div className="container-header__actions">
                <button onClick={() => closeContainer()} className="container-header__actions__close">
                    <img src="/images/voltar.png" />
                </button>
            </div>
        </div>
    )
}