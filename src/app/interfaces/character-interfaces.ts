export interface ICharacter {
  abilityScores: IAbilityScore[];
  characterName: string;
}

export interface IAbilityScore {
  abilityName: string;
  abilityScore: number;
  abilityBonus: number;
}
