import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { ViewPokemonComponent } from './pokemons/view-pokemon/view-pokemon.component';
import { ManagePokemonComponent } from './pokemons/manage-pokemon/manage-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    ViewPokemonComponent,
    ManagePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
