import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users = [
    { id: 1, name: 'Ishara Samaraweera', email: 'ishara@gmail.com' },
    { id: 2, name: 'Ama Nishadi', email: 'ama@gmail.com' },
    { id: 3, name: 'Sahan Fanando', email: 'sahan@gmail.com' },
    { id: 4, name: 'Piumi Kaushalya', email: 'piumi@gmail.com' },
    { id: 5, name: 'Kenula Hirun', email: 'hirun@gmail.com' },
  ];

  editUser(userId: number): void {
    // Implement edit logic
    console.log(`Edit user with ID ${userId}`);
  }

  deleteUser(userId: number): void {
    // Implement delete logic
    console.log(`Delete user with ID ${userId}`);
  }
}