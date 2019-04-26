import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { SvgMagnifeicentTreeComponent } from './svg-magnifeicent-tree/svg-magnifeicent-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    SvgMagnifeicentTreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
