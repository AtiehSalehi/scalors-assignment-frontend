import { Component, ViewEncapsulation } from '@angular/core';
import { MultiSelectComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // define the JSON of data
    public skillList: { [key: string]: Object }[] = [
        { Id: 'skill1', skill: 'javascript' },
        { Id: 'skill2', skill: 'java' },
        { Id: 'skill3', skill: 'html' },
        { Id: 'skill4', skill: 'css' },
        { Id: 'skill5', skill: 'jquery' },
        { Id: 'skill6', skill: 'Angular' },
        { Id: 'skill7', skill: 'react' },
        { Id: 'skill8', skill: 'vue' },
        { Id: 'skill9', skill: 'paython' },
        { Id: 'skill10', skill: 'go' },
    ];
    // map the appropriate columns to fields property
    public fields: object = {text: 'skill', value: 'Id'};
    // set the placeholder to MultiSelect input element
    public skillLanguage: string = 'type a programming language';
    // set the type of mode for how to visualized the selected items in input element.
    public box : string = 'Box';

}