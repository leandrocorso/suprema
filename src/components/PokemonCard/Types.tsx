import Image from "next/image";
import { nanoid } from "nanoid";

import { PokemonTypesProps } from "@/types/Pokemon";

import { StyledTypes, StyledTypesItem } from "./style";

export const Types = ({ types }: { types: PokemonTypesProps[] }) => {
  return (
    <StyledTypes>
      <h5 className="title">Elementos</h5>
      <ul className="list">
        {types.map(({ type }) => {
          return (
            <StyledTypesItem key={nanoid()} type={type.name}>
              <span>
                <Image
                  src={`/icons/${type.name}.svg`}
                  alt={type.label}
                  width={20}
                  height={20}
                />
                <span>{type.label}</span>
              </span>
            </StyledTypesItem>
          );
        })}
      </ul>
    </StyledTypes>
  );
};
