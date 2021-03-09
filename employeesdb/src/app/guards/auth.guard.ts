import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    isAuth: boolean = true;

    constructor(public router: Router, public angularFireAuth: AngularFireAuth) { }

    canActivate(): boolean {
        this.angularFireAuth.authState.subscribe(a => {
            if (!a) {
                console.log(a);
                this.isAuth = true;
                this.router.navigate(['/login']);
            } else {
                this.isAuth = true;
            }
        });
        return this.isAuth;
    }
}
