import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class DataService {

  constructor(
    private http : Http
  ) {}

  get(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  

}
