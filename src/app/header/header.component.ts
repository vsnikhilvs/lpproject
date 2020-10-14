import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {
  loginModal: boolean;
  registerModal: boolean;
  formLogin: FormGroup;
  formRegister: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  this.formRegister = this.formBuilder.group({
    regFname: ['', Validators.required],
    regLname: ['', Validators.required],
    regEmail: ['', Validators.required],
    regMobile: ['', Validators.required]
  });
  }

  get fl() { return this.formLogin.controls; }
  get fr() { return this.formRegister.controls; }

  onLoginSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.formLogin.invalid) {
          return;
      }
      this.showDialogLogin();
      this.hideLoginDialog();
  }
  showLoginModal() {
    this.loginModal = true;
  }
  showDialogLogin() {
    this.messageService.add({key: 'l', severity:'info', summary: 'Success', detail: 'Login success'});
  }
  hideLoginDialog() {
    setTimeout(() => {
      this.loginModal = false;
      this.formLogin.reset();
      this.submitted = false;
    }, 400);
  }


  onRegisterSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formRegister.invalid) {
        return;
    }
    this.showDialogRegister();
    this.hideRegisterDialog();
  }
  showRegisterModal() {
    this.registerModal = true;
  }
  showDialogRegister() {
    this.messageService.add({key: 'r', severity:'info', summary: 'Success', detail: 'Registered successfully'});
  }
  hideRegisterDialog() {
    setTimeout(() => {
      this.registerModal = false;
      this.formRegister.reset();
      this.submitted = false;
    }, 400);
  }


  onReject() {
    this.messageService.clear();
  }

}
