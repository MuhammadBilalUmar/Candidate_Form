import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helpers/must-match.validator';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    CandidateForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.CandidateForm = this.formBuilder.group({
            Name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            Phone: ['', Validators.required],
            Recruiter: ['', Validators.required],
            Company: ['', Validators.required],
            Candidate: ['', Validators.required],
            Merits: ['', Validators.required],
            Attachment: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.CandidateForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.CandidateForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.CandidateForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.CandidateForm.reset();
    }
}
