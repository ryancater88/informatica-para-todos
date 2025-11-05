
import './headerComponent.style.css'

export default function HeaderComponent() {
    return (
        <div className="pageHeader">
            <div className="pageHeader__title">
                <h2 className="textTitle">Informática para Todos</h2>
            </div>
            <div className="pageHeader__actions">
                <div className="actions__action">
                    <a href="/home" className='actionItem'>Home</a>
                </div>
                <div className="actions__action">
                    <a href="/about" className='actionItem'>Sobre</a>
                </div>
            </div>
        </div>
    )
}