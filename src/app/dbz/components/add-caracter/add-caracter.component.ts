import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';


@Component({
  selector: 'app-add-caracter',
  templateUrl: './add-caracter.component.html',
  styleUrls: ['./add-caracter.component.css']
})
export class AddCaracterComponent {
  @Output()
  public onNewCharater: EventEmitter<Character> = new EventEmitter();

  public character: Character ={
      id: '',
      name: '',
      power: 0
  }



  emitCaracter(){
    if (this.character.name.length == 0){
      return;
    }

    this.onNewCharater.emit(this.character);
    this.character = {
      id : '',
      name: '',
      power: 0
    };
  }
}
