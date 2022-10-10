import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  display = '';
  hello(value: any) {
    console.warn(value)
  }
  getName(value: any) {
  }
  get(value: any) {
    console.warn(value)
  }
  value1 = 0;
  value(value: String) {
    value === 'add' ? this.value1++ : this.value1--;
  }
  name = 'interpolation';
  disable = true
  whg() {
    if (this.disable == true) {
      this.disable = false;

    }
    else this.disable = true
  }
  show = true;
  get1() {
    if (this.show == false) {
      this.show = true;

    }
  }
  student = [
    { name: "ram", age: 20, email: "@mailram" },
    { name: "rahim", age: 21, email: "@mailrahim" },
    { name: "ravi", age: 21, email: "@mailravi" },
    { name: "ramesh", age: 22, email: "@mailramesh" },
    { name: "raghav", age: 23, email: "@mailradhav" }
  ]
}