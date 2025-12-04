import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formLogin: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      // Define your form controls here
      email: new FormControl(''),
      password: new FormControl('') 
    });
  }
}
