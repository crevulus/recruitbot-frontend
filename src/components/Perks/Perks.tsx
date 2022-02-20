import React from "react";

import { PerksType } from "../../data/types";

import { StyledPerk, StyledPerksContainer } from "./Perks.styles";

type PerksPropsType = {
  perks: PerksType[];
};

function Perks({ perks }: PerksPropsType) {
  return (
    <StyledPerksContainer>
      {perks &&
        perks.length > 0 &&
        perks.map((perk) => (
          <StyledPerk key={perk.id}>
            {perk.text} {perk.emoji ? perk.emoji : "✅"}
          </StyledPerk>
        ))}
    </StyledPerksContainer>
  );
}

export default Perks;
