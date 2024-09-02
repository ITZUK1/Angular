import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: character[] = [{
    name:'trunk',
    power: 10
  }];
  
  
  
  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();



  onDeleteChacacter(id?:string):void{
    //TODO: emitir el ID del personaje
    if(!id) return;
    console.log({id})
      this.onDelete.emit(id);
  }


}
