import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/conservice.service'

@Component({
    templateUrl: './fetchcontact.component.html'
})

export class FetchContactComponent {
    public conList: ContactData[];

    constructor(public http: Http, private _router: Router, private _contactService: ContactService) {
        this.getContacts();
    }

    getContacts() {
        this._contactService.getContacts().subscribe(
            data => this.conList = data
        )
    }

    delete(contactID) {
        var ans = confirm("Do you want to delete customer with Id: " + contactID);
        if (ans) {
            this._contactService.deleteContact(contactID).subscribe((data) => {
                this.getContacts();
            }, error => console.error(error))
        }
    }
}

interface ContactData {
    contactId: number;
    contactname: string;
    address: string;
    phoneno: string;
    email: string;
    age: number;
    country: string;
    facebook: string;
    twitter: string;
    linkedin: string;

} 