import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="content">
      <div class="darkmode">
        <button class="darkmode__btn" (click)="toggleDarkmode()">Darkmode</button>
      </div>
      <app-users [darkmode]="darkmode"></app-users>
    </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'User Managing Service';
  darkmode: boolean = false;

  toggleDarkmode() {
    let body = document.querySelector('body');
    let searchfield = document.querySelector('.searchfield');
    let table = document.querySelector('table');
    let tableRows = document.querySelectorAll('tr');
    let buttons = document.querySelectorAll('.button-input');
    let darkmodeBtn = document.querySelector('.darkmode__btn');

    if (body.classList.contains('body-darkmode')) {
      this.darkmode = false;
      body.classList.remove('body-darkmode');
      searchfield.classList.remove('searchfield-darkmode');
      table.classList.remove('table-darkmode');
      darkmodeBtn.classList.remove('darkmode__btn--dark');

      for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].classList.remove('tr-darkmode');
        if(buttons[i]) {
          buttons[i].classList.remove('button-darkmode');
        }
      }
    }
    else {
      this.darkmode = true;
      body.classList.add('body-darkmode');
      searchfield.classList.add('searchfield-darkmode');
      table.classList.add('table-darkmode');
      darkmodeBtn.classList.add('darkmode__btn--dark');
      
      for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].classList.add('tr-darkmode');
        if(buttons[i]) {
          buttons[i].classList.add('button-darkmode');
        }
      }
    }
  }
}