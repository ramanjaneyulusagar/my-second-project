import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  @Input() groupFilters!: Object;
  @Input() searchByKeyword!: string;

  users: any[] = [];
  filteredUsers: any[] = [];

  constructor(private userService: HttpserviceService,
              private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnChanges(): void {
    if (this.groupFilters) this.filterUserList(this.groupFilters, this.users);
  }

  filterUserList(filters: any, users: any): void {
    this.filteredUsers = this.users;     //Reset User List

    const keys = Object.keys(filters);
    const filterUser = (user:any) => keys.every(key => user[key] === filters[key]);

    this.filteredUsers = this.users.filter(filterUser);

    this.ref.detectChanges();
  }

  loadUsers(): void {
    this.userService.fetchUsers()
                    .subscribe((users:any) => this.users = users);

    this.filteredUsers = this.filteredUsers.length > 0 ? this.filteredUsers : this.users;                
  }

}
