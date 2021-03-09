import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public router: Router, public authService: AuthService, public flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
  }
  login() {
    this.authService.login(this.email, this.password)
      .then((res) => {
        this.flashMessagesService.show('you are logged in!', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['']);
      })
      .catch((err) =>{
        this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/login']);
      })
  }
}
