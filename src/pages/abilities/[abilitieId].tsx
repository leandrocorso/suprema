import { useState, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { Layout } from "@/components/Layout";
import { AbilitiesList } from "@/components/AbilitiesList";
import { PokemonList } from "@/components/PokemonList";

import { fetchPokemon, fetchAbilities } from "@/services/pokeapi";
import { PokemonProps } from "@/types/Pokemon";

export default function PokemonsByAbilities() {
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: async () => await fetchPokemon(),
  });

  useEffect(() => {
    data && setPokemonList((prev) => [...prev, ...data]);
  }, [data]);

  return (
    <Layout title="Poderes">
      <h1>Pokémons por poderes</h1>

      <div className="page-wrapper">
        <div className="menu">
          <AbilitiesList />
        </div>

        <div className="content">
          {isError && <p>Ocorreu um erro</p>}

          {pokemonList.length > 0 && (
            <>
              <PokemonList pokemons={pokemonList || []} isLoading={isLoading} />
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
