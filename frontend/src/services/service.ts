import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000/api';
  }

  /**
   * addPerson
   */
  public addPerson(data: any) {
    return this.httpClient.post(this.url + '/person', data);
  }
  /**
   * getAllPerson
   */
  public getAllPerson() {
    return this.httpClient.get(this.url + '/person');
  }
  /**
   * getOnePerson
   */
  public getOnePerson(fullname: string) {
    return this.httpClient.get(this.url + '/person/name/' + fullname);
  }
}
