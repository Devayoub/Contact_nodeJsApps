import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Contact} from './contact';
import 'rxjs/add/operator/map';
import  'rxjs/observable/';

@Injectable()
export class ContactService {

  constructor(private http:Http) { }

  getContacts(){
    return this.http.get('http://localhost:3031/api/contact/')
    .map( res => res.json());
  }
}
