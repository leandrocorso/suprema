import { useState, useEffect } from "react";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";

import { fetchAbilities } from "@/services/pokeapi";

export const AbilitiesList = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["abilitiesList"],
    queryFn: async () => await fetchAbilities({ getAll: true }),
  });

  return (
    <div className="abilities">
      {isError && <p>Ocorreu um erro ao carregas os poderes dos Pokémons</p>}

      {isLoading && <p>Carregando poderes</p>}

      {data && (
        <ul>
          {data.map((a) => (
            <li key={nanoid()}>
              <Link href={`/abilities/${a.name}`}>{a.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
