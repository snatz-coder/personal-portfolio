import { Component, OnInit } from '@angular/core';
import { Experience } from './experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience : Experience[] = [ new Experience('Front-End Web Developer', '2019-2020', 'Border Innovation', 'Lisbon,Portugal'),
  new Experience('Web Developer', '2018-2019', 'Kitsec Lda', 'Leiria,Portugal'),
  new Experience('Web Developer Intern', '2016-2017', 'Domatica Global Solutions', 'Lisbon,Portugal')];

  constructor() { }

  ngOnInit(): void {
  }

}
