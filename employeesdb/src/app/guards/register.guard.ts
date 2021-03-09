import { SettingsService } from './../services/settings.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';




@Injectable()
export class RegisterGuard implements CanActivate {
    isAuth: boolean = true;

    constructor(
        public router: Router,
        public angularFireAuth: AngularFireAuth,
        public settingsService: SettingsService
    ) { }

    canActivate(): boolean {
        if (this.settingsService.getSettings().isRegisterOpen) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }

}
