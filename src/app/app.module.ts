import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { menuBar } from 'src/components/menuComponent/menu.component';
import { bigCardComponent } from 'src/components/bigCardComponent/bigCard.component';
import { smallCard } from 'src/components/smallCard/smallCard.component';
import { cardComponent } from 'src/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    menuBar,
    bigCardComponent,
    smallCard,
    cardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, menuBar, bigCardComponent, smallCard, cardComponent]
})
export class AppModule { }
