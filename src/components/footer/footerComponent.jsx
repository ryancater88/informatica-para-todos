import { DateService } from "../../services/DateService"
import './footerComponent.styles.css'

export function FooterComponent() {
    const ano = DateService.getFullYear()

    return (
        <div className="footer">
            <p>Ryan Galvão</p>
            <p>|</p>
            <p>UNICV</p>
            <p>|</p>
            <p>{ano}</p>
        </div>
    )
}