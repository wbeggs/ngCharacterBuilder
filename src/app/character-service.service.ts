import { Injectable } from '@angular/core';
import { IAbilityScore, ICharacter } from './interfaces/character-interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public character: ICharacter;
  public abilityScores$ = new BehaviorSubject<IAbilityScore[]>([]);

  constructor() { this.init(); }

  private init() {
    this.character = {
      characterName: '',
      abilityScores: []
    };



    let abilityNames = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

    abilityNames.forEach(name => {
      this.character.abilityScores.push(this.generateAbilityScore(name));
    });
  }
  private generateAbilityScore(name: string): IAbilityScore {
    return {
      abilityName: name,
      abilityScore: 8,
      abilityBonus: -1,
    };
  }
}
