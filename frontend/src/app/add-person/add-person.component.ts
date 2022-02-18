import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/services/service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  data: any;
  constructor(private service: PersonService, public router: Router) {
    this.data = {
      fullname: '',
      birth: '',
      mother: '',
      father: ''
    };
  }

  ngOnInit(): void { }
  goBack(): void {
    this.router.navigate(['']);
  }
  addPerson() {
    this.service.addPerson(this.data).subscribe((_) => {
    });
  }
}
