import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DropdownPokemons from '../components/DropdownPokemons';
import { Modal, Button, Form } from 'react-bootstrap';

function ListaPokemon() {
    const [pokemons, setPokemons] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(null);

    const pokemonSeleccionado = selectedPokemonIndex !== null ? pokemons[selectedPokemonIndex] : null;

    useEffect(() => {
        // Obtén la lista de pokemons desde el almacenamiento local
        let storedPokemons = localStorage.getItem('pokemons');
        storedPokemons = JSON.parse(storedPokemons) || [];
        setPokemons(storedPokemons);
    }, []);

    // Función para eliminar un Pokemon
    const eliminarPokemon = (indice) => {
        // Obtén la lista de pokemons desde el almacenamiento local
        let pokemons = localStorage.getItem('pokemons');
        pokemons = JSON.parse(pokemons) || [];

        // Elimina el Pokemon en el índice proporcionado
        pokemons.splice(indice, 1);

        // Guarda la lista actualizada en el almacenamiento local
        localStorage.setItem('pokemons', JSON.stringify(pokemons));

        // Recarga la página para reflejar los cambios
        window.location.reload();
    };

    const mostrarModal = (indice) => {
        setShowModal(true);
        setSelectedPokemonIndex(indice);
    };

    const cerrarModal = () => {
        setShowModal(false);
    };

    const modificarPokemon = (event) => {
        event.preventDefault();
    
        const indice = selectedPokemonIndex;
        const nuevoNombre = event.target.elements.nombrePokemon.value.trim() || pokemonSeleccionado.nombrePokemon;
        const nuevaInfoPokemon = event.target.elements.infoPokemon.value.trim() || pokemonSeleccionado.infoPokemon;
        const nuevoNombreEntrenador = event.target.elements.nombreEntrenador.value.trim() || pokemonSeleccionado.nombreEntrenador;
        const nuevoServicio = event.target.elements.servicio.value.trim() || pokemonSeleccionado.servicio;
    
        // Modifica los datos del Pokémon en la lista
        const nuevosPokemons = [...pokemons];
        nuevosPokemons[indice] = {
            ...nuevosPokemons[indice],
            nombrePokemon: nuevoNombre,
            infoPokemon: nuevaInfoPokemon,
            nombreEntrenador: nuevoNombreEntrenador,
            servicio: nuevoServicio,
        };
    
        // Actualiza el estado con la lista modificada
        setPokemons(nuevosPokemons);
    
        // Guarda la lista actualizada en el almacenamiento local
        localStorage.setItem('pokemons', JSON.stringify(nuevosPokemons));
    
        // Cierra el modal después de modificar
        setShowModal(false);
    };

    return (
        <>
            <Header />

            <main className="container">
            <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th scope="col" className='text-center'>ID</th>
                            <th scope="col" className='text-center'>Nombre Pokémon</th>
                            <th scope="col" className='text-center'>Info Pokémon</th>
                            <th scope="col" className='text-center'>Nombre Entrenador</th>
                            <th scope="col" className='text-center'>Servicio</th>
                            <th scope="col" className='text-center'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemons.map((pokemon, i) => (
                            <tr key={i}>
                                <td className='text-center'>{i}</td>
                                <td>{pokemon.nombrePokemon}</td>
                                <td>{pokemon.infoPokemon}</td>
                                <td>{pokemon.nombreEntrenador}</td>
                                <td>{pokemon.servicio}</td>
                                <td className='text-center'>
                                    <Button
                                        variant="warning"
                                        onClick={() => mostrarModal(i)}
                                    >
                                        Modificar
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => eliminarPokemon(i)}
                                    >
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Modal show={showModal} onHide={cerrarModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modificar Pokemon</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={modificarPokemon}>
                            <Form.Group controlId="nombrePokemon">
                                <Form.Label>Nombre del Pokémon</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={pokemonSeleccionado ? pokemonSeleccionado.nombrePokemon : ''}
                                />
                            </Form.Group>

                            <Form.Group controlId='infoPokemon' className='mt-3'>
                                <Form.Label>Info Pokemon</Form.Label>
                                <Form.Select>
                                    <option value="">{pokemonSeleccionado ? pokemonSeleccionado.infoPokemon : 'Seleccionar Pokémon'}</option>
                                    <DropdownPokemons /> {/* Asegúrate de manejar la selección según sea necesario */}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId='nombreEntrenador' className='mt-3'>
                                <Form.Label>Nombre del entrenador</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder={pokemonSeleccionado ? pokemonSeleccionado.nombreEntrenador : ''}
                                />
                            </Form.Group>

                            <Form.Group controlId='servicio' className='mt-3'>
                                <Form.Label>Servicio</Form.Label>
                                <Form.Select>
                                    <option value="">{pokemonSeleccionado ? pokemonSeleccionado.servicio : 'Seleccionar servicio'}</option>
                                    <option value="Crianza">Crianza</option>
                                    <option value="Sanación">Sanación</option>
                                    <option value="Intercambio">Intercambio</option>
                                </Form.Select>
                            </Form.Group>

                            <Button variant="primary" type="submit" className='mt-3'>
                                Guardar cambios
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </main>

            <Footer />
        </>
    );
}

export default ListaPokemon;
