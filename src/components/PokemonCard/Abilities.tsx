import classNames from "classnames";
import { nanoid } from "nanoid";

import { PokemonAbilitiesProps } from "@/types/Pokemon";

import { EyeBlocked } from "@/components/Icons";
import { StyledAbilities } from "./style";

export const Abilities = ({
  abilities,
}: {
  abilities: PokemonAbilitiesProps[];
}) => {
  return (
    <StyledAbilities>
      <h5>Poderes</h5>
      <ul className="list">
        {abilities.map(({ ability, is_hidden }) => (
          <li key={nanoid()} className={classNames("item", { is_hidden })}>
            {ability.label}
            {is_hidden && <EyeBlocked title="Habilidade oculta" />}
          </li>
        ))}
      </ul>
    </StyledAbilities>
  );
};
