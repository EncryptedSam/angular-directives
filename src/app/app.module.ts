import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { NgClassComponent } from './attribute-directives/ng-class/ng-class.component';
import { NgStyleComponent } from './attribute-directives/ng-style/ng-style.component';
import { NgIfAsteriskComponent } from './structural-directives/ng-if-asterisk/ng-if-asterisk.component';
import { NgForAsteriskComponent } from './structural-directives/ng-for-asterisk/ng-for-asterisk.component';
import { NgSwitchAsteriskComponent } from './structural-directives/ng-switch-asterisk/ng-switch-asterisk.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
    NgClassComponent,
    NgStyleComponent,
    NgIfAsteriskComponent,
    NgForAsteriskComponent,
    NgSwitchAsteriskComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
