import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Character } from '../interfaces/character.interfaces';

@Injectable({ providedIn: 'root' })
export class DbzServices {
  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Vegeta',
      power: 1500,
    },
    {
      id: uuidv4(),
      name: 'Vulma',
      power: 1750,
    },
    {
      id: uuidv4(),
      name: 'Killir',
      power: 1800,
    },
  ];

  guardarCharacter(character: Character) {
    const newCharacter: Character = { ...character, id: uuidv4()};
    this.characters.push(newCharacter);
  }

  /*onDeleteCharacter(index: number) {
    console.log('onDeleteCharacter: ' + index);
    this.characters.splice(index, 1);
  }*/

  onDeleteCharacterById(uuid: string) {
    console.log('onDeleteCharacterById: ' + uuid);
    this.characters = this.characters.filter(item => item.id !== uuid);
    console.log(this.characters);
  }

}
