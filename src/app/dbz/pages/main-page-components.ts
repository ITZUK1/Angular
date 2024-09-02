import { Component, OnInit } from "@angular/core";
import { character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})
export class NameComponent  {
 
   constructor (private dbzService:DbzService){}

   get characters(): character []{
    return [...this.dbzService.characters];
   }
   
   onDeleteCharacter(id:string):void{
    this.dbzService.deleteChracterById(id);
   }
   
   onNewCharacter(character:character):void{
    this.dbzService.AddCharacter(character);
   }
 
}
  