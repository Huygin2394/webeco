import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  title = 'ECO Village';
  public ecovillage: String = 'ECO Village';
  public product: String = 'Product';
  public story: String = 'Story';
  public contact: String = 'Contact Us';
  public 2: Number = 2;
}
