import { Component, OnInit } from '@angular/core';
import { Info } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info: Info[]= [
    new Info('Sujane Natasha Lopez', 'assets/image/profile.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
