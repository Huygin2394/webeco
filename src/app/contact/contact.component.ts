import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = new FormControl('');
  phone = new FormControl('');
  email = new FormControl('');
  content = new FormControl('');

  public send: String = 'Send';
}
