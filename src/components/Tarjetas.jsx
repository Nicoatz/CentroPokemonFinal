import PropTypes from 'prop-types';
import '../css/Pokedex.css'

function Tarjetas({ pokemons }) {
    let pokemonsArmados = [];

    pokemons.forEach((poke) => {

        let tipos = poke.types ? poke.types.map((type) => type.type.name) : [];

        let pokeId = poke.id ? poke.id.toString() : '';
        if (pokeId.length === 1) {
            pokeId = "00" + pokeId;
        } else if (pokeId.length === 2) {
            pokeId = "0" + pokeId;
        }

        const pokeArmado = {
            pokeId: pokeId,
            pokeName: poke.name,
            pokeTipo: tipos,
            pokeHeight: poke.height,
            pokeWeight: poke.weight,
            pokeImg: poke.sprites.other["official-artwork"] ? poke.sprites.other["official-artwork"].front_default : ''
        };

        pokemonsArmados.push(pokeArmado);
        
    });

    // console.log(pokemonsArmados.length)

    // for (let index = 0; index < pokemonsArmados.length; index++) {
    //     console.log(pokemonsArmados[index])
        
    // }

    return (
        <>
            {pokemonsArmados.map((p) => (
                <div className='pokemon' key={p.pokeId}>
                    <p className="pokemon-id-back">#{p.pokeId}</p>
                    <div className="pokemon-imagen">
                        <img src={p.pokeImg} alt={p.pokeName} />
                    </div>
                    <div className="pokemon-info">
                        <div className="nombre-contenedor">
                            <p className="pokemon-id">#{p.pokeId}</p>
                            <h2 className="pokemon-nombre">{p.pokeName}</h2>
                        </div>
                        <div className="pokemon-tipos">
                            {p.pokeTipo.map((t) => (
                                <p className={`${t} tipo`} key={t}>{t}</p>
                            ))}
                        </div>
                        <div className="pokemon-stats">
                            <p className="stat">{p.pokeHeight}m</p>
                            <p className="stat">{p.pokeWeight}kg</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

Tarjetas.propTypes = {
    pokemons: PropTypes.array.isRequired,
};

export default Tarjetas;

