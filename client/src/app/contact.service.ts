import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Contact} from './contact';
import { map } from "rxjs/operators";
import {Observable ,of} from "rxjs"


@Injectable(
    {
     providedIn: 'root'
    }

)
export class ContactService {


    constructor(private http:Http) { }

    getContacts() :Observable<Contact[]>{

    return this.http.get('http://localhost:3031/api/contact/')
    .pipe(map( res => res.json()));
    
    }
 
    addContact(newContact)
    {
        var headers=new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:3031/api/contact/',newContact,{headers: headers})
        .pipe(map( res => res.json()));

    }

    deleteContact(id)
    {

      return this.http.delete('http://localhost:3031/api/contact/'+id)
      .pipe(map( res => res.json()));


    }
    
}
