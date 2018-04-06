import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaHotelsComponent } from './components/lista-hotels/lista-hotels.component';
import { HotelComponent } from './components/hotel/hotel.component';

import { RouterModule } from '@angular/router';
import { HotelsService } from './services/hotels.service';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'hotels',
    pathMatch: 'full'
  },
  { path: 'hotels', component: ListaHotelsComponent },
  { path: 'new', component: HotelComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ListaHotelsComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
