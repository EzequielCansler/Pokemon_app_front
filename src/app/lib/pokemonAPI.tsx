const URL = "https://pokeapi.co/api/v2/pokemon/";
export async function GetPokemonList(): Promise<PokemonListItem[]> {
  const response = await fetch(URL);
  const pokemonList = await response.json();
  const { results } = pokemonList;

  /* const pokemons = results.map(async (pokemon: PokemonListItem) => {
    const response = await fetch(pokemon.url);
    const poke = await response.json();
    return {
      id: poke.id,
      name: poke.name,
      img: poke.sprites.front_default,
    };
  }); */
  return results;
}
