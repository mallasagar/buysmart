import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  BrandTitle:String = 'BUY SMART'
  faprofile=faUser
;
}
