import Image from "next/image";
import { getDataPokemons } from "../../api/FetchApi";

export default function Home() {
  const pokemons = getDataPokemons;
  console.log(pokemons);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Entrenadores Pokemon</h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
