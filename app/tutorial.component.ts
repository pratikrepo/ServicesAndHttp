import { Component, EventEmitter } from '@angular/core'


@Component({
    selector:'my-tutorials',
    template: `<h1>{{title}}</h1>
    <h3>Enter the child value</h3>
    <input type='text' #childData (keyup)="onChange(childData.value")>
    <h3>The entered parent class value is </h3>
    {{parentData}}<br>
    <img [src]='imgLink'>`,
    styleUrls:['./app.component.css'],
    inputs:['parentData'],
    outputs:["childEvent"]
})
export class TutorialsComponent{
    public title = "This is tutorial component";
    public parentData:string;
    childEvent = new EventEmitter<string>();
    onChange(value:string){
        this.childEvent.emit(value);
    }
}