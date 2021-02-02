import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, FormControlName,FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: any;
  isSubmitted: boolean = false;
  constructor( private formBuilder: FormBuilder,
    private router: Router) { 
      this.userForm = this.formBuilder.group({
        name:new FormControl('', [
          Validators.required]),
        password: new FormControl('', [
          Validators.required]),
      });
    }

  ngOnInit() {}
  get f() { return this.userForm.controls; }

  saveUser() {
    this.isSubmitted = true;
    if (this.userForm.dirty && this.userForm.valid) {
        if(this.userForm.value.name == 'Bhargava' && this.userForm.value.password == 'Bhargava1123'){
          this.router.navigateByUrl('orders');
        } else {
          alert('Invalid credintials');
        }
    }
  }
}

