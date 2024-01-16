import PokemonCard from "../app/components/pokemonCard";
import NavBar from "./components/navBar";
import Pagination from "./components/pagination";
export default function Home() {
  return (
    <>
      <NavBar />

      <PokemonCard />

      <Pagination />
    </>
  );
}
