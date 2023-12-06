import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  @Input() user: any;

  constructor(private http: HttpClient) { }

  saveUser(): void {
    console.log('Save user:', this.user);
  }
}

