
import { Component , OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageCompoments {


   constructor(private dbzServices:DbzServices) {

   }

   get charaters(): Character[] {
     return this.dbzServices.characters;
   }


   guardarCharacter(character: Character){
    this.dbzServices.guardarCharacter(character);
   }

   onDeleteCharacterById(iuud: string) {
    this.dbzServices.onDeleteCharacterById(iuud);
   }

}
