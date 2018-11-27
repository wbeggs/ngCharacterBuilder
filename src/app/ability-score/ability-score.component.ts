import { Component, Input, OnInit } from '@angular/core';
import { IAbilityScore } from '../interfaces/character-interfaces';

@Component({
  selector: 'app-ability-score',
  templateUrl: './ability-score.component.html',
  styleUrls: ['./ability-score.component.css']
})
export class AbilityScoreComponent implements OnInit {
  @Input() abilityScore: IAbilityScore;
  constructor() { }

  ngOnInit() {
  }

}
