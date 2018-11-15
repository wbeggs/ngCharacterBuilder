import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public attributes: any[]
  constructor() {this.init();}
  private init() {
    //toDo: generate array of strings for attributes names
    //foreach over array pass string value to generate attribute
    //add that to object to attribues property
  }
  private generateAttribute(string: name){
    //toDo: take in name generate score, bonus
  }
}
