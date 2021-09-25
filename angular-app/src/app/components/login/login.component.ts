import { Component, OnInit } from '@angular/core';
import { MapTo } from '@adobe/cq-angular-editable-components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor() { }
  ngOnInit() {} 
  
  login(): void {
    if(this.username==='admin' && this.password==='admin') {
      alert('Login successful');
    } else {
      alert('Wrong Credentials');
    }
  }
}
MapTo('wknd-events/components/content/login')(LoginComponent);