import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  wording1: string = '';
  num1: number = 0;
  num2: number = 0;
  symbol: Array<string> = ['+','-','*','/'];
  sb: string = '';
  constructor() { }

  ngOnInit(): void {
    this.wording1 = 'hello world';
  }
  editTile(param:any){

    this.wording1 = param;
  }
  cal(param:any){
    let n = this.num1;
    let n2 = this.num2;
    if (this.sb == '+'){
      this.wording1 = (n + n2).toString();
    } else if (this.sb == '-') {
      this.wording1 = (n - n2).toString();
    } else if (this.sb == '*') {
      this.wording1 = (n * n2).toString();
    } else if (this.sb == '/') {
      this.wording1 = (n / n2).toString();
    }else{
      this.wording1 = '0';
    }
  }

}
