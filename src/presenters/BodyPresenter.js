import React, { useEffect, useState } from 'react'
import Body from '../views/BodyView'
import '../views/css/Body.css'

function BodyPresenter() {

    const [pokemons, setPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

    const getPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject(results)  {
            results.forEach( async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data =  await res.json()

                setPokemons( currentList => [...currentList, data])
            //   await allPokemons.sort((a, b) => a.id - b.id)
            })
        }
        createPokemonObject(data.results)
    }

    console.log("test");

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <div>
            <div className="pokedex-container">
                { pokemons.map( (pokemon, i) => 
                    <Body
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        type={pokemon.types[0].type.name}
                        key={i}
                    />
                )}
            </div>
                <button className="loadMore" onClick={() => getPokemons()}>Load More</button>
            
        </div>
    )
}

export default BodyPresenter