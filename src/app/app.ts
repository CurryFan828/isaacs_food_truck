import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Search } from "./search/search";
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser'
// import { NgModule } from '@angular/core';
// import { HomeComponent } from './home/home';
// import { AppRoutingModule } from './app.routes';


// @NgModule({
//   declarations: [
//     App,
//     Header,
//     HomeComponent, 
//     Search
//   ],
  
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule
//   ],

//   providers: [],

//   bootstrap: [App]
// })

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'foodmine-course';
}
