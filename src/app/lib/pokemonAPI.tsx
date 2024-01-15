const URL = "https://pokeapi.co/api/v2/pokemon/";
export async function GetPokemonList(): Promise<PokemonListItem[]> {
  const response = await fetch(URL);
  const pokemonList = await response.json();
  const { results } = pokemonList;
  return results;
}

export async function GetPokemonData(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return data;
}
