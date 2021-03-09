import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FlashMessagesModule } from 'angular2-flash-messages';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeesComponent } from './components/employees/employees.component';

import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';

import { EmployeeService } from './services/employee.service';
import { AuthService } from './services/auth.service';
import { SettingsService } from './services/settings.service';
import { from } from 'rxjs';

export const firebaseConfig = {
  apiKey: "AIzaSyDAqpMoQ4rWvN5Cc9W_gxRe7M465B0l98k",
  authDomain: "employeemanagement-b0754.firebaseapp.com",
  databaseURL: "https://employeemanagement-b0754-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "employeemanagement-b0754",
  storageBucket: "employeemanagement-b0754.appspot.com",
  messagingSenderId: "992813236178",
  appId: "1:992813236178:web:bc3cd071f0cb87d6ce920b",
  measurementId: "G-0E4ELTCVPB"
};

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [RegisterGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'addEmployee', component: AddEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'employee/:id', component: EmployeeInfoComponent, canActivate: [AuthGuard] },
  { path: 'editEmployee/:id', component: EditEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeInfoComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    EmployeeService,
    AuthService,
    AuthGuard,
    RegisterGuard,
    SettingsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }