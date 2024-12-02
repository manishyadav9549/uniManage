import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { School } from './services/application.model';
import { ApplicationService } from './services/application.service';
import { SCHOOL_TABLE_CONFIG } from './services/school.dummy';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-su-admin',
  templateUrl: './su-admin.component.html',
  styleUrls: ['./su-admin.component.scss'],
  providers: [ConfirmationService]
})
export class SuAdminComponent {
  school!: School;
  schools: School[] = [];
  paginator = SCHOOL_TABLE_CONFIG.paginator;
  headers = SCHOOL_TABLE_CONFIG.headers[0].cols;
  invalid: boolean = false;
  entityType: string = '';
  isEditMode: boolean = false;
  data: any;
  sortOrder = 1; // 1 for ascending, -1 for descending
  sortField: string | null = null;
  globalFilterFields: string[] = [];
  subscription: Subscription | null = null;

  constructor(private messageService: MessageService, private appService: ApplicationService, private confirmationService: ConfirmationService, private router: Router) {
    this.schoolIntialize();
  }

  entityMenuItems = [
    {
      label: 'School',
      icon: 'pi pi-building',
      command: () => this.setType('school')
    },
    {
      label: 'Hospital',
      icon: 'pi pi-heart',
      // command: () => this.setType('hospital')
    },
    {
      label: 'Restaurant',
      icon: 'pi pi-hashtag',
      // command: () => this.setType('restaurant')
    }
  ];

  ngOnInit() {
    this.getSchools();
    this.globalFilterFields = this.headers.map((header) => header.valueField);
  }

  // Function to set the type and show the corresponding form
  setType(type: string) {
    this.entityType = type;
    this.isEditMode = false;
  }

  // Submit handler for each form
  onSubmit(form: any) {
    console.log('Form submitted:', form.value);
    let value = form.value;
    this.validators(value);
    if (this.invalid == true) {
      this.invalid = false
      return;
    }
    if (this.isEditMode) {
      // Update logic
    }
    else {
      value['applicationType'] = this.entityType;
      let firstName = value['name'].split(" ");
      value['id'] = 'S' + value['establishedYear'] + firstName[0] + Math.floor(1000 + Math.random() * 9000);
      this.subscription = this.appService.addApplication(value).subscribe({
        next: (response) => {
          this.data = response
        },
        error: (error) => {
          console.error('Error fetching data: ', error);
        },
        complete: () => {
          console.log('Data stream completed');
        }
      });
      // this.schools.push({ ...this.school }); 
      form.reset();
      this.setType("");
    }
  }

  getSchools() {
    this.appService.getAppList().subscribe({
      next: (response) => {
        this.schools = response
        console.log("School list: " + this.schools);
      },
      error: (error) => {
        console.error('Error fetching schoolList: ', error);
      },
      complete: () => {
        console.log('Data stream completed');
      }
    })
  }

  // Methods for action buttons
  editSchool(school: School) {
    // Implement edit logic here
    this.school = { ...school };
    this.isEditMode = true;
  }

  deleteSchool(school: School) {
    // Implement delete logic here
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this school?',
      accept: () => {
        // this.schools = this.schools.filter(s => s.id !== school.id);
        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'School deleted successfully.' });
      }
    });
    console.log("school: ", school)
    // this.
  }

  viewDetails(school: School) {
    // Implement view details logic here
    console.log('Viewing details for', school);
    this.router.navigate(["/school-admin"],{state :school});
  }


  validators(value: any) {
    console.log("Manish value", value);
    if (value.name.trim() == '') {
      this.messageService.add({ 'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter School Name.' });
      this.invalid = true;
      return;
    }
    else if (value.address.trim() == '') {
      this.messageService.add({ 'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Address.' });
      this.invalid = true;
      return;
    }
    else if (value.city.trim() == '') {
      this.messageService.add({ 'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter City.' });
      this.invalid = true;
      return;
    }
    else if (value.district.trim() == '') {
      this.messageService.add({ 'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter District.' });
      this.invalid = true;
      return;
    }
    else if (value.state.trim() == '') {
      this.messageService.add({ 'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter State.' });
      this.invalid = true;
      return;
    }
    else if (value.postalCode == 0) {
      this.messageService.add({ 'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter PIN Code.' });
      this.invalid = true;
      return;
    }
    else if (value.country.trim() == '') {
      this.messageService.add({ 'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Country.' });
      this.invalid = true;
      return;
    }
    else if (value.phone.trim() == '' || value.phone.isNaN) {
      this.messageService.add({ 'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Valid Phone Number.' });
      this.invalid = true;
      return;
    }
    else if (value.gmail.trim() == '') {
      this.messageService.add({ 'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Gmail.' });
      this.invalid = true;
      return;
    }
    else if (!value.gmail.trim().endsWith('@gmail.com')) {
      this.messageService.add({ 'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Valid Gmail.' });
      this.invalid = true;
      return;
    }
    else if (value.principalName.trim() == '') {
      this.messageService.add({ 'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Principal name.' });
      this.invalid = true;
      return;
    }
    else if (value.current_student_count == 0) {
      this.messageService.add({ 'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Student\'s Strength.' });
      this.invalid = true;
      return;
    }
    else if (value.student_capacity == 0) {
      this.messageService.add({ 'severity': 'warn', 'summary': 'Warning', 'detail': 'Please Enter Total Student Capacity.' });
      this.invalid = true;
      return;
    }
  }

  sort(field: string) {
    this.sortField = field;
    this.sortOrder = this.sortOrder === 1 ? -1 : 1; // Toggle sort order

    this.schools.sort((a: any, b: any) => {
      const valueA = a[field];
      const valueB = b[field];

      if (valueA < valueB) {
        return -1 * this.sortOrder;
      }
      if (valueA > valueB) {
        return 1 * this.sortOrder;
      }
      return 0;
    });
  }


  schoolIntialize() {
    this.school = {
      name: '',
      school_id: '',
      address: '',
      city: '',
      district: '',
      state: '',
      postal_code: 0, // Default or initial value
      country: '',
      phone: 0, // Default or initial value
      gmail: '',
      principalName: '',
      establishedYear: 0, // Default or initial value
      boardAffiliation: '',
      studentCapacity: 0, // Default or initial value
      currentStudentCount: 0, // Default or initial value
      website_url: '',
      last_updated: new Date() // Default or initial value
    };
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    } 

  }

}
