import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
education: Education[] = [ new Education('Matsers degree', 'Computer Engineering-Mobile Computing','2015-2017', 'Polytechnic Institute of Leiria', 'Leiria, Portugal'),
new Education('Bachelors degree', 'Electronics & Communication Engineering','2011-2015', 'PACE', 'Mangalore, India')];


  constructor() { }

  ngOnInit(): void {
  }

}
