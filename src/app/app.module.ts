import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HighlightDirective } from './utils/highlight';
import { ExponentialStrengthPipe } from './utils/exponential-strength';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    HighlightDirective,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
