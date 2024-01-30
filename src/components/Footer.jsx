import '../css/general.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 mt-4 border-top"
        data-bs-theme="dark">
            
                <p className="col-md-4 mb-0 text-body-secondary itemFooter">© 2023 Centro Pokémon</p>
            

            
                <Link to="/home" className="col-md-4 d-flex justify-content-center mb-md-0 me-md-auto itemFooter">
                    <img width="48" height="48" src="https://img.icons8.com/color/96/pokeball--v1.png" alt="pokeball" />
                </Link>
            

            
                <Link to='/home' className="nav-item text-decoration-none itemFooter"><span className="nav-link text-body-secondary">Home</span></Link>
            
            
        </footer>
    )
}

export default Footer