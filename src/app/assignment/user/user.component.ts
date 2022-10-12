import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jspdf from 'jspdf';
import { HttpserviceService } from '../httpservice.service';
import { NgxPrintModule } from 'ngx-print';
import autoTable from 'jspdf-autotable';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searchText!: string;
  filters!: Object;
  constructor(private httpservice:HttpserviceService) { }

  ngOnInit(): void {
  }
  @ViewChild('input',{static:false}) el!:ElementRef;
  text='';
  users: any = [];
  getbyname(val:any){
    console.log(val);
    this.users = [];
    this.httpservice.getfilterdata(val).subscribe((data:any)=>{
      this.users.push(data);
    console.log(data)
    });
  }
   pdf() {
    var pdf = new jspdf();
    autoTable(pdf, { html: '#input' });
    pdf.save('hello.pdf');
    // pdf.html(this.el.nativeElement, {
    //   callback: (pdf) => {
    //     pdf.save('hello.pdf')
    //   }
    // })
}
}
