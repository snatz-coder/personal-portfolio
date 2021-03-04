import { Component, OnInit } from '@angular/core';
import { About } from './about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: About[]= [
    new About('Sujane Natasha Lopez', 'assets/image/profile.jpg','', 'snazlopez@gmail.com','London, W10-6SX','Front-End Web Developer')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
