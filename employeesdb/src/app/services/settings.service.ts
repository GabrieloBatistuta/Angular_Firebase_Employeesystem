import { Settings } from './../Settings';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    isRegisterOpen: true,
    disableSalary: true,
    isSalaryEditable: true
  }

  constructor() {
    if (localStorage.getItem('settings') != null) {
      console.log(localStorage.getItem('settings'));
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings() {
    return this.settings;
  }

  changeSettings(settings: Settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
