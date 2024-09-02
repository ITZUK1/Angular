import { NgModule } from "@angular/core";
import { counterComponent } from "./counter/Counter.component";




@NgModule({
    declarations:[
        counterComponent
    ],
    exports:[
        counterComponent
    ]
})



export class counterModule{}