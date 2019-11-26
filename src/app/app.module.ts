import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HighlightDirective } from './utils/highlight';
import { ExponentialStrengthPipe } from './utils/exponential-strength';
import { ListComponent } from './sidebar/list/list.component';
import { ItemComponent } from './sidebar/list/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    HighlightDirective,
    ExponentialStrengthPipe,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
