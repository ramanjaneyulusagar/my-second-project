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
              private userService: HttpserviceService) {}

  ngOnInit(): void {
    this.buildForm();
  }

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
