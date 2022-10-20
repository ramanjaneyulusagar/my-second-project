import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form!: FormGroup;

  @Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() groupFilters: EventEmitter<any>  = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
              private userService: HttpserviceService,private http:HttpClient) {}

  ngOnInit(): void {
    this.buildForm();
  }
file!:File;
name:string='';
getname(name:string){
  this,name=name;

}
getfile(event:any){
  this.file=<File>event.target.files[0];
  console.log('file',this.file)
}
submit(){
  let formdata=new FormData();
  formdata.set("name",this.name);
  formdata.set("file",this.file);
  return this.http.post("http://localhost:3000/comments",formdata)
  .subscribe((Response:any)=>{
    console.log(Response);
  })
}
DocUpload(event:any){
console.log(event);
}
afuConfig = {
  uploadAPI: {
    url:"https://example-file-upload-api"
  }
};
// afuConfig = {
//   multiple: false,
//   formatsAllowed: ".jpg,.png,.pdf",
//   maxSize: 1,
//   uploadAPI:  {
//     url:"http://localhost:3000/comments",
//     method:"POST",
//     headers: {
//    "Content-Type" : "text/plain;charset=UTF-8",
//    //"Authorization" : `Bearer ${token}`
//     }
//   },
//   theme: "dragNDrop",
//   hideProgressBar: true,
//   hideResetBtn: true,
//   hideSelectBtn: true,
//   replaceTexts: {
//     selectFileBtn: 'Select Files',
//     resetBtn: 'Reset',
//     uploadBtn: 'Upload',
//     dragNDropBox: 'name',
//     attachPinBtn: 'Attach Files...',
//     afterUploadMsg_success: 'Successfully Uploaded !',
//     afterUploadMsg_error: 'Upload Failed !'
//   }
// };

//   afuConfig = {
//     uploadAPI: {
//       url:"http://localhost:3000/comments",
//       multiple: false,
//         formatsAllowed: ".jpg,.png",
//         maxSize: "1",
//     },
//     theme: "dragNDrop",
//       hideProgressBar: true,
//       hideResetBtn: true,
//       hideSelectBtn: true,
//       replaceTexts: {
//         selectFileBtn: 'Select Files',
//         resetBtn: 'Reset',
//         uploadBtn: 'Upload',
//         dragNDropBox: 'Drag N Drop',
//         attachPinBtn: 'Attach Files...',
//         afterUploadMsg_success: 'Successfully Uploaded !',
//         afterUploadMsg_error: 'Upload Failed !'
//       }
// };
// afuConfig = {
//   multiple: false,
//   formatsAllowed: ".jpg,.png",
//   maxSize: "1",
//   uploadAPI:  {
//     url:"https://example-file-upload-api",
//     method:"POST",
   
//   },
//   theme: "dragNDrop",
//   hideProgressBar: true,
//   hideResetBtn: true,
//   hideSelectBtn: true,
//   replaceTexts: {
//     selectFileBtn: 'Select Files',
//     resetBtn: 'Reset',
//     uploadBtn: 'Upload',
//     dragNDropBox: 'Drag N Drop',
//     attachPinBtn: 'Attach Files...',
//     afterUploadMsg_success: 'Successfully Uploaded !',
//     afterUploadMsg_error: 'Upload Failed !'
//   }
// };
  buildForm(): void {
    this.form = this.fb.group({
      name: new FormControl(''),
      prefix: new FormControl(''),
      position: new FormControl(''),
      gender: new FormControl('')
    });
  }

  search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
  }

}
