import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import DropdownPokemons from '../components/DropdownPokemons';

import '../css/general.css'

function Registro() {
    const navigate = useNavigate();
    // FORMULARIO
    const [nombreEntrenador, setNombreEntrenador] = useState('');
    const [nombrePokemon, setNombrePokemon] = useState('');
    const [infoPokemon, setInfoPokemon] = useState('');
    const [servicio, setServicio] = useState('');
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        let cantPokemons = localStorage.getItem('pokemons');
        cantPokemons = JSON.parse(cantPokemons) || [];

        setPokemons(cantPokemons);
    }, []);

    const cargarPokemon = () => {
        if (!nombreEntrenador || !nombrePokemon || !infoPokemon || !servicio) {
            alert("Todos los campos son obligatorios. Por favor, complete todos los campos.");
            return;
        }

        console.log(`Datos ingresados: ${nombreEntrenador} - ${nombrePokemon} - ${infoPokemon} - ${servicio}`);

        const pokemon = {
            nombreEntrenador: nombreEntrenador,
            nombrePokemon: nombrePokemon,
            infoPokemon: infoPokemon,
            servicio: servicio
        };

        setPokemons((prevPokemons) => {
            const updatedPokemons = [...prevPokemons, pokemon];
            window.localStorage.setItem('pokemons', JSON.stringify(updatedPokemons));
            return updatedPokemons;
        });
        navigate('/lista')
        limpiarDatos();
    };

    function limpiarDatos() {
        setNombreEntrenador('');
        setNombrePokemon('');
        setInfoPokemon('');
        setServicio('');
    }

    return (
        <>
            <Header />

            <main className="container mt-4 p-4">
                <div className="container">
                    <form id="miFormulario">
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Nombre del entrenador</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    // id="nombreEntrenador"
                                    value={nombreEntrenador}
                                    onChange={(e) => setNombreEntrenador(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Nombre del Pokémon</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    // id="nombrePokemon"
                                    value={nombrePokemon}
                                    onChange={(e) => setNombrePokemon(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Pokémon</label>
                            <div className="col-sm-10">
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={(e) => setInfoPokemon(e.target.value)}
                                >
                                    <option value="">Seleccionar Pokémon</option>
                                    <DropdownPokemons onSelect={(pokemonSeleccionado) => setInfoPokemon(pokemonSeleccionado)} />
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Servicio</label>
                            <div className="col-sm-10">
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    // id="servicio"
                                    value={servicio}
                                    onChange={(e) => setServicio(e.target.value)}
                                >
                                    <option value="" disabled>Seleccionar servicio</option>
                                    <option value="Crianza">Crianza</option>
                                    <option value="Sanación">Sanación</option>
                                    <option value="Intercambio">Intercambio</option>
                                </select>
                            </div>
                        </div>
                        <button onClick={cargarPokemon} type="submit" className="btn btn-primary">Registrar Pokémon</button>
                    </form>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Registro





