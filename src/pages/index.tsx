import Head from "next/head";
import { useQuery } from "@tanstack/react-query";

import { Navbar } from "@/components/Navbar";
import { getPokemons } from "@/services/pokeapi";
import { PokemonList } from "@/components/PokemonList";

export default function Home() {
  const {
    data: pokemonList,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: getPokemons,
  });

  return (
    <>
      <Head>
        <title>Pokémons</title>
      </Head>
      <main>
        <Navbar />
        <div className="container">
          <h1>Suprema Gaming & Co</h1>

          <div className="pokemons">
            {isError && <p>Ocorreu um erro</p>}
            {pokemonList && (
              <PokemonList pokemons={pokemonList} isLoading={isLoading} />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
