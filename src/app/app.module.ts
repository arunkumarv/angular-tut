import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HighlightDirective } from './utils/highlight';
import { ExponentialStrengthPipe } from './utils/exponential-strength';
import { ListComponent } from './sidebar/list/list.component';
import { ItemComponent } from './sidebar/list/item/item.component';
import { CompOneComponent } from './routes/comp-one/comp-one.component';
import { CompTwoComponent } from './routes/comp-two/comp-two.component';
import { CompThreeComponent } from './routes/comp-three/comp-three.component';
import { CompFourComponent } from './routes/comp-four/comp-four.component';
import { CompPageNotFoundComponent } from './routes/comp-page-not-found/comp-page-not-found.component';
import { TopBarComponent } from './utils/top-bar/top-bar.component';

const appRoutes: Routes = [
  { path: 'comp-one', component: CompOneComponent },
  { path: 'comp-two', component: CompTwoComponent },
  { path: 'comp-three', component: CompThreeComponent },
  { path: 'comp-four', component: CompFourComponent },
  { path: '', redirectTo: '/comp-one', pathMatch: 'full' },
  { path: '**', component: CompPageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    HighlightDirective,
    ExponentialStrengthPipe,
    ListComponent,
    ItemComponent,
    CompOneComponent,
    CompTwoComponent,
    CompThreeComponent,
    CompFourComponent,
    CompPageNotFoundComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
