"use client";
import { useState, useEffect } from "react";
import { GetPokemonList } from "../lib/pokemonAPI";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [poke, setPoke] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const results = await GetPokemonList();

      const pokemons = await Promise.all(
        results.map(async (pokemon: PokemonListItem) => {
          const response = await fetch(pokemon.url);
          const poke = await response.json();

          return {
            id: poke.id,
            name: poke.name,
            img: poke.sprites.other.dream_world.front_default,
            types: poke.types,
          };
        })
      );
      console.log(pokemons);
      setPoke(pokemons);
    };

    getPokemon();
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-screen-2xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Pokemon
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {poke.map((pokemon) => (
              <div key={pokemon.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 my-2">
                  <Image
                    src={pokemon.img}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                    className="object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-black">
                      <Link href={`/pokemon/${pokemon.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {pokemon.name}
                      </Link>
                    </h3>

                    {pokemon.types && (
                      <div className="mt-1 text-sm text-gray-500 flex space-x-2">
                        {pokemon.types.map((pokemonType, index) => (
                          <span
                            key={index}
                            className={`mr-2 px-2 py-1 text-white rounded`}
                            style={{
                              backgroundColor: `var(--${pokemonType.type.name})`,
                            }}
                          >
                            {pokemonType.type.name}
                          </span>
                        ))}
                      </div>
                    )}
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
