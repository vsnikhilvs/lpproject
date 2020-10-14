import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-fillform',
  templateUrl: './fillform.component.html',
  styleUrls: ['./fillform.component.css'],
  providers: [MessageService]
})
export class FillformComponent implements OnInit {
  files: any = [];
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required]
    })
  }

  get f() { return this.registerForm.controls; }

  confirmSubmit() {
    setTimeout(() => {
      this.registerForm.reset();
      this.submitted = false;
    }, 200);
  }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
      this.showTopCenter();
      this.confirmSubmit();
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  showTopCenter() {
    this.messageService.add({key: 'tc', severity:'info', summary: 'Success', detail: 'Registered successfully'});
  }
  onConfirm() {
    this.messageService.clear('tc');
  }

  onReject() {
    this.messageService.clear('tc');
  }

}
