import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-su-admin',
  templateUrl: './su-admin.component.html',
  styleUrls: ['./su-admin.component.scss'],
  providers: [ConfirmationService]
})
export class SuAdminComponent {
  users = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin', applicationType: 'School ERP' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', applicationType: 'Restaurant' },
    // More users...
  ];

  roles = [
    { label: 'Admin', value: 'Admin' },
    { label: 'Manager', value: 'Manager' },
    { label: 'User', value: 'User' }
  ];

  applicationTypes = [
    { label: 'School ERP', value: 'School ERP' },
    { label: 'Hospital', value: 'Hospital' },
    { label: 'Restaurant', value: 'Restaurant' }
  ];

  user = { name: '', email: '', role: '', applicationType: '' };
  isEditMode = false;

  constructor(private confirmationService: ConfirmationService) {}

  onSubmit(form:any) {
    if (this.isEditMode) {
      // Logic for updating the user
    } else {
      // Logic for creating a new user
      this.users.push({ ...this.user });
    }
    this.onReset();
  }

  onEditUser(user:any) {
    this.user = { ...user };
    this.isEditMode = true;
  }

  onDeleteUser(user:any) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${user.name}?`,
      accept: () => {
        this.users = this.users.filter(u => u !== user);
      }
    });
  }

  onReset() {
    this.user = { name: '', email: '', role: '', applicationType: '' };
    this.isEditMode = false;
  }
}
