

//Componentes
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

//CSS
import '../css/general.css'
import '../css/Home.css'

//Imagenes
import CentroPokemonImg from '../assets/images/centroPokemon.webp'
import PokeballImg from '../assets/images/Pokeball-card.png'
import Pikachu from '../assets/images/Pikachu.png'
import PokedexImg from '../assets/images/pokedex.jpg'

function Home() {

    let sesion = sessionStorage.getItem('Sesion');
    let sesionObj = JSON.parse(sesion);

    useEffect(() => {
        // Verifica que 'listaPokemon' existe antes de intentar acceder a sus propiedades
        const listaPokemon = document.getElementById('listaPokemon');
        if (listaPokemon) {
            if (sesionObj.codigo === 1) {
                listaPokemon.classList.remove('d-none');
            } else {
                listaPokemon.classList.add('d-none');
            }
        }
    }, [sesionObj.codigo]);

    return (
        <>
            <Header />

            <main className='container'>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={CentroPokemonImg} className="img-fluid rounded-start" alt="Centro Pokémon"></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">¡Bienvenido al Centro Pokémon!</h1>
                                <p className="card-text">En el Centro Pokémon brindamos todos los servios necesarios para el cuidado y salud de tus pokémons.</p>
                                <p className="card-text">Entre en los servicios que brindamos a nuestros clientes y sus pokémons estan:</p>
                                <ul>
                                    <li>Crianza de Pokémons</li>
                                    <li>Sanación de Pokémons</li>
                                    <li>Intermediario para el intercambio de Pokémons entre entrenadores</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-group">
                    <div className="card">
                        <img src={PokeballImg} alt="Ingresar Pokémon" />
                        <div className="card-body">
                            <h5 className="card-title">Ingresar Pokémon</h5>
                            <p className="card-text">Llene un formulario con los datos de su Pokémon y especificando el tipo de servicio que quiere.</p>
                            <Link to='/registro' className="btn btn-outline-danger icon-link">
                                Visitar pagina
                            </Link>
                        </div>
                    </div>
                    <div id='listaPokemon' className="card">
                        <img src={Pikachu} height="100%" width="100%" className="card-img-top" alt="Lista Pokémon"></img>
                        <div className="card-body">
                            <h5 className="card-title">Lista de Pokémons ingresados</h5>
                            <p className="card-text">Lista de Pokémons ingresados al sistemas para ser atendidos en nuestro centro.</p>
                            <Link to='/lista' className="btn btn-outline-danger icon-link">
                                Visitar pagina
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src={PokedexImg} className="card-img-top" alt="Pokedex" height="100%" width="100%"></img>
                            <div className="card-body">
                                <h5 className="card-title">Pokedex</h5>
                                <p className="card-text">Informacion sobre todos los Pokémons de nuestra región.</p>
                                <Link to='/pokedex' className="btn btn-outline-danger icon-link">
                                    Visitar pagina
                                </Link>
                            </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Home