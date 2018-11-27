import { Component, Input, OnInit } from '@angular/core';
import { IAbilityScore } from '../interfaces/character-interfaces';

@Component({
  selector: 'app-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.css']
})
export class AbilityScoresComponent implements OnInit {

  @Input() public abilityScores: IAbilityScore[];

  constructor() { }

  ngOnInit() {
  }

}
