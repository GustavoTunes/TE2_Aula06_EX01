import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { JurosComponent } from './juros/juros.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, JurosComponent, FormsModule],
  template: `
    <app-juros></app-juros>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
