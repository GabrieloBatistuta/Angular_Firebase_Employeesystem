import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  
  constructor(public router: Router, public authService: AuthService, public flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.register(this.email, this.password)
      .then((res) => {
        this.flashMessagesService.show('Registered sucessessfully', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['']);
      })
      .catch((err) => {
        this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      })
  }
}
