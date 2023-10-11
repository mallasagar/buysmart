import { Component } from '@angular/core';
import { authenticationService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [authenticationService]
})
export class AppComponent {
  title = 'BuySmart';
  user:string ='customer'
  
}
