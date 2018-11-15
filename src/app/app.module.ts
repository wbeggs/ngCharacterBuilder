import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { AbilityScoresComponent } from './ability-scores/ability-scores.component';
import { AbilityScoreComponent } from './ability-score/ability-score.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSheetComponent,
    AbilityScoresComponent,
    AbilityScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
