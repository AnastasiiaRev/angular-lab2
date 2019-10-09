import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() navBarImpl: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
