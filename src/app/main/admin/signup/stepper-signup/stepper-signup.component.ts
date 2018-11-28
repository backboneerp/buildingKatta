import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {ServerService} from './server.service';
import { SignUpModel } from './signup-model';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-stepper-signup',
  templateUrl: './stepper-signup.component.html',
  styleUrls: ['./stepper-signup.component.css']
})
export class StepperSignupComponent implements OnInit {

 // appName = this.serverService.getAppName();
  

 









 servers = [
    {
     email: 'kjk',
      password: 10,
      name: 'Saurabh'
    }
  ];












  foods: Food[] = [
    {value: 'steak-0', viewValue: 'India'}
  ];
  states: string[] = [
    'Maharashtra', 'Gujarat', 'Keral', 'Tamilnadu', 'Karnatak', 'Andhrapradesh', 'Telangana', 'Goa'
  ];
  cities: string[] = [
    'Pune', 'Mumbai', 'Nagpur', 'Hyderabad', 'Chennai', 'Aurangabad', 'Nashik', 'Ahemadnagar'
  ];

  btnClick= function () {
    this.router.navigate(['/signin']);
  };

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  constructor(private _formBuilder: FormBuilder,
              private router: Router,
              private serverService: ServerService) { }

  // onAddServer(Password: string) {
  //   this.servers.push({
  //     Email: name,
  //     Password: 50,
  //     Name: 'Anil'
  //   });
  // }
  onSave() {

    let data=new SignUpModel();
    data.AccountType='saving';
    data.City='pune';
    data.Country='India';
    data.Email='datta@gmail.com';
    data.Landmark='MAruti Mandir';
    data.Name='Dattatray sabne';
    data.Password='Datta@123';
    data.RegID=20;
    data.SocietyContactPerson='dattatray sabne';
    data.SocietyEmail='society@gmail.com';
    data.SocietyIdNo='123456';
    data.SocietyLandline='02024588566';
    data.SocietyName='Bharat Society';
    data.State='MAharashtra';
    data.StreetName='Kothrud depo';
    
    


    // this.serverService.storeServers(this.servers)
    //   .subscribe(
    //     (response) => console.log(response),
    //     (error) => console.log(error)
    //   );

    this.serverService.storeServers(data).subscribe((response)=>console.log(response),
    (error)=>console.log(error));


  }
  // onGet() {
  //   this.serverService.getServers()
  //     .subscribe(
  //       (servers: any[]) => this.servers = servers,
  //       (error) => console.log(error)
  //     );
  // }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      emailId: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      version: ['', Validators.required]
    });
  }
}
