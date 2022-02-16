import React from "react";

import { StyledPerk, StyledPerksContainer } from "./Perks.styles";

import mockConversationData from "../../mockConversationData.json";

type PerkType = {
  id: number;
  text: string;
  emoji?: string;
};

function Perks() {
  const perks: PerkType[] = mockConversationData.perks;

  return (
    <StyledPerksContainer>
      {perks.length > 0 &&
        perks.map((perk) => (
          <StyledPerk key={perk.id}>
            {perk.text} {perk.emoji ? perk.emoji : "✅"}
          </StyledPerk>
        ))}
    </StyledPerksContainer>
  );
}

export default Perks;
