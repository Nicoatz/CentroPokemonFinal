import { Link } from 'react-router-dom';

import '../css/general.css'
import LogoImg from '../assets/images/Logo_grande.png'

function HeaderReg() {

    return (
        <header>
            <div className="div-header">
                <Link to='/home' className='div-nav-item'>
                    <img src={LogoImg} alt="Centro Pokémon" className="img-header" />
                </Link>
                <Link to="/" className="btn btn-outline-light">Cerrar Sesion</Link>
            </div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <hr className="d-md-none text-white-50" />

                    <div className="collapse navbar-collapse" id="menu">
                        <div className='div-nav'>
                            <Link to='/home' className='div-nav-item'>Inicio</Link>
                            <Link to='/registro' className='div-nav-item'>Registrar Pokémon</Link>
                            {/* <Link to='/lista' className='div-nav-item'>Pokémons Ingresados</Link> */}
                            <Link to='/pokedex' className='div-nav-item'>Pokedex</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderReg;

