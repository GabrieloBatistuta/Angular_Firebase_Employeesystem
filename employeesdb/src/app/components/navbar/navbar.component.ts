import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = true;
  isUserLogin: string;
  enableRegister: boolean = false;

  constructor(public router: Router, public authService: AuthService, public flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.isUserLogin = auth.email;
      } else {
        this.isLogin = false;
      }
    });
  }
  logoutClick(){
    this.authService.logout();
    this.flashMessagesService.show('you are logged out!', { cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['/login']);
  }
}
