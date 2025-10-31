
import './headerComponent.style.css'

export default function HeaderComponent() {
    return (
        <div className="pageHeader">
            <div className="pageHeader__title">
                <h2 className="textTitle">Informática para Todos</h2>
            </div>
            <div className="pageHeader__actions">
                <div className="actions__action">
                    <a href="/sobre" className='actionItem'>Sobre</a>
                </div>
            </div>
        </div>
    )
}