import { Component, OnInit } from '@angular/core';
import { emiVariable } from '../emiVariable';

@Component({
  selector: 'app-emi-variables',
  templateUrl: './emi-variables.component.html',
  styleUrls: ['./emi-variables.component.css']
})
export class EmiVariablesComponent implements OnInit {
  test : emiVariable ={
    amount : 0,
    tenture : 0,
    rateOfInterest :0,
    emi : 0
  }
  calculate() : void{
    var r = this.test.rateOfInterest /(100*12);
    var t = this.test.tenture * 12;
    var p = this.test.amount;
    this.test.emi = Math.round((p*((r*Math.pow(1+r, t))/(Math.pow(1+r, t)-1)))*100)/100;
  }
  constructor() { }

  ngOnInit() {
  }

}
