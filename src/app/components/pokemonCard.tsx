"use client";
import { useState, useEffect } from "react";
import { GetPokemonList } from "../lib/pokemonAPI";
import Link from "next/link";

export default function Home() {
  const [poke, setPoke] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const results = await GetPokemonList();

      const pokemons = results.map(async (pokemon: PokemonListItem) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();
        console.log(response);
        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.front_default,
        };
      });
      setPoke(await Promise.all(pokemons));
    };
    getPokemon();
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Pokemon
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {poke.map((pokemon) => (
              <div key={pokemon.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={pokemon.img}
                    alt={pokemon.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/pokemon/${pokemon.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {pokemon.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">nada</p>
                    <p className="text-sm font-medium text-gray-900">nada</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
