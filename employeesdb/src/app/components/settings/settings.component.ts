import { Settings } from './../../Settings';
import { SettingsService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings;

  constructor(
    public settingsService: SettingsService,
    public router: Router,
    public flashMessagesService: FlashMessagesService,

  ) { }

  ngOnInit(): void {
    this.settings = this.settingsService.getSettings();
  }
  saveSettings(){
    this.settingsService.changeSettings(this.settings);
    this.flashMessagesService.show("Saved successfully !", { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['/settings']);
  }
}
