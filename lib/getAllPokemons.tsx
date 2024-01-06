import React from "react";

const urlPokemon = "https://pokeapi.co/api/v2/pokemon";

export default async function getAllPokemons() {
  const res = await fetch(urlPokemon);
  if (!res.ok) {
    throw new Error("Could not retrieve Pokémon data");
  }
  return res.json();
}
