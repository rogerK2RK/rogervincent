import { Link } from "react-router-dom"
import '../Pages/styleNav.css'

export function Navbar() {
    return (
        <nav>
            <Link to="/">Accueil</Link> | <Link to="/films">Films</Link> | <Link to="/series">Series</Link>
        </nav>
    )
}