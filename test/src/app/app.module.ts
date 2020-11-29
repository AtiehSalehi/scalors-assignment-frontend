import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ MultiSelectAllModule, BrowserModule, ButtonModule, CheckBoxModule, NumericTextBoxModule, FormsModule,             ReactiveFormsModule,BrowserModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
