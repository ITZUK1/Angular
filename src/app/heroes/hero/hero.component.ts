import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']  
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public metod: string = 'soltero';

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  get HeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'dead poll';
  }

  changeAge( ): void {
    this.age = 25;
  }

  resertForm():void{
   this.name='ironman';
   this.age = 45;
  }

  
}
