import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/services/service';

@Component({
  selector: 'app-one-person',
  templateUrl: './one-person.component.html',
  styleUrls: ['./one-person.component.scss'],
})
export class OnePersonComponent implements OnInit {
  isConsult: boolean;
  fullname: string;
  infoPerson: any;
  constructor(private service: PersonService, public router: Router) {
    this.isConsult = false;
    this.fullname = '';
  }

  ngOnInit(): void { }

  getOnePerson(): void {
    this.service.getOnePerson(this.fullname).subscribe((response) => {
      this.infoPerson = response;
    });
  }
  goBack(): void {
    this.router.navigate(['']);
  }
}
