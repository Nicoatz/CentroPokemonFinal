import Tarjetas from "../components/Tarjetas"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

function Pokedex() {

    const [ pokemon, setPokemon] = useState([]);
    const [filterType, setFilterType] = useState("todos");

    useEffect(() => {
        const fetchData = async () => {
            let URL = "https://pokeapi.co/api/v2/pokemon/";
            
            let i = 0
            while (true) {
            // for (let i = 1; i <= 151; i++) {
                i += 1
                try {
                    const response = await fetch(URL + i);
                    const data = await response.json();
        
                    setPokemon((prevPokemon) => [...prevPokemon, data]);
                } catch (error) {
                    break
                }
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <Header />

            <main className="container">
                <p className="gap-1">
                    <div className="btn btn-danger" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <div className="icon-filter">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                                />
                            </svg>
                            <span>Filtrar</span>
                        </div>
                    </div>

                </p>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body mb-3">
                        <ul className="types-list">
                            <li className="nav-item">
                                <button
                                    className="btn-header"
                                    id="ver-todos"
                                    onClick={() => setFilterType("todos")}>
                                    Ver todos
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn-header normal"
                                    id="normal"
                                    onClick={() => setFilterType("normal")}>
                                    Normal
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header fire" 
                                    id="fire"
                                    onClick={() => setFilterType("fire")}>
                                    Fuego
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header water" 
                                    id="water"
                                    onClick={() => setFilterType("water")}>
                                    Agua
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header grass" 
                                    id="grass"
                                    onClick={() => setFilterType("grass")}>
                                    Pasto
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header electric" 
                                    id="electric"
                                    onClick={() => setFilterType("electric")}>
                                    Electrico
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header ice" 
                                    id="ice"
                                    onClick={() => setFilterType("ice")}>
                                    Hielo
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header fighting" 
                                    id="fighting" 
                                    onClick={() => setFilterType("fighting")}>
                                    Pelaeador
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header poison" 
                                    id="poison" 
                                    onClick={() => setFilterType("poison")}>
                                    Veneno
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header ground" 
                                    id="ground"
                                    onClick={() => setFilterType("ground")}>
                                    Tierra
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header flying" 
                                    id="flying"
                                    onClick={() => setFilterType("flying")}>
                                    Volador
                                </button>
                            </li>
                            <li className="nav-item"></li>
                                <button
                                    className="btn-header psychic" 
                                    id="psychic"
                                    onClick={() => setFilterType("psychic")}>
                                    Psiquico
                                </button>
                            <li className="nav-item">
                                <button 
                                    className="btn-header bug" 
                                    id="bug"
                                    onClick={() => setFilterType("bug")}>
                                    Insecto
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header rock" 
                                    id="rock"
                                    onClick={() => setFilterType("rock")}>
                                    Piedra
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header ghost" 
                                    id="ghost"
                                    onClick={() => setFilterType("ghost")}>
                                    Fantasma
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header dark" 
                                    id="dark"
                                    onClick={() => setFilterType("dark")}>Oscuridad</button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header dragon" 
                                    id="dragon"
                                    onClick={() => setFilterType("dragon")}>
                                    Dragón
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header steel" 
                                    id="steel"
                                    onClick={() => setFilterType("steel")}>
                                    Hierro
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn-header fairy" 
                                    id="fairy"
                                    onClick={() => setFilterType("fairy")}>
                                    Hada
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id={filterType}>
                    <div className="pokemon-todos" id="listaPokemon">
                        <Tarjetas
                            pokemons={pokemon.filter(
                                (p) =>
                                    filterType === "todos" ||
                                    p.types.some((type) => type.type.name === filterType)
                            )}
                        />
                    </div>
                </div>
            </main>
            
            <Footer />
        </>
    )
}

export default Pokedex