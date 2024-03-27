import { useState, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { Layout } from "@/components/Layout";
import { PokemonList } from "@/components/PokemonList";

import { getPokemons } from "@/services/pokeapi";
import { PokemonProps } from "@/types/Pokemon";

export default function Home() {
  const limit = 4; // pokemons per page
  const [offset, setOffset] = useState<number>(0);
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);

  const { ref, inView } = useInView();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["pokemonList", offset],
    queryFn: async () => await getPokemons(offset),
  });

  useEffect(() => {
    data && setPokemonList((prev) => [...prev, ...data]);
  }, [data]);

  useEffect(() => {
    inView && setOffset(offset + limit);
  }, [inView]);

  return (
    <Layout title="Home">
      <h1>Home</h1>

      {isError && <p>Ocorreu um erro</p>}
      {pokemonList.length && (
        <>
          <PokemonList pokemons={pokemonList || []} isLoading={isLoading} />
          <span ref={ref} />
        </>
      )}
    </Layout>
  );
}
