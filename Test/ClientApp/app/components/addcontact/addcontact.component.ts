import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchContactComponent } from '../fetchcontact/fetchcontact.component';
import { ContactService } from '../../services/conservice.service';

@Component({
    templateUrl: './AddContact.component.html'
})

export class createcontact implements OnInit {
    contactForm: FormGroup;
    title: string = "Create";
    contactId: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _contactService: ContactService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.contactId = this._avRoute.snapshot.params["id"];
        }

        this.contactForm = this._fb.group({
            contactId: 0,
            contactname: ['', [Validators.required]],
            address: ['', [Validators.required]],
            phoneno: ['', [Validators.required]],
            email: ['', [Validators.required]]
        })
    }

    ngOnInit() {


        if (this.contactId > 0) {
            this.title = "Edit";
            this._contactService.getContactById(this.contactId)
                .subscribe(resp => this.contactForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.contactForm.valid) {
            return;
        }

        if (this.title == "Create") {
            this._contactService.saveContact(this.contactForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-contact']);
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._contactService.updateContact(this.contactForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-contact']);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/fetch-contact']);
    }

    get contactname() { return this.contactForm.get('contactname'); }
    get address() { return this.contactForm.get('address'); }
    get phoneno() { return this.contactForm.get('phoneno'); }
    get email() { return this.contactForm.get('email'); }
    get age() { return this.contactForm.get('age'); }
    get country() { return this.contactForm.get('country'); }
    get facebook() { return this.contactForm.get('facebook'); }
    get twitter() { return this.contactForm.get('twitter'); }
    get linkedin() { return this.contactForm.get('linkedin'); }
}  