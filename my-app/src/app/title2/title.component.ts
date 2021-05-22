import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title2',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent2 implements OnInit {

  constructor() { }
  name: string = '';
  surname: string = '';
  studentId: string = '';



  ngOnInit(): void {
  }

}
