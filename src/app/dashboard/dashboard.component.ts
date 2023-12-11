import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private _router:Router){}
  logout(){
    this._router.navigateByUrl("/login")
    localStorage.removeItem("token")
  }
  // To apply selected option highlightened
  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
