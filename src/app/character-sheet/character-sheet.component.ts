import { Component, OnInit } from '@angular/core';
import { CharacterService} from '../character-service.service';
@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  constructor(public characterService: CharacterService) { }

  ngOnInit() {
    console.log(this.characterService.character.abilityScores);
  }

}
