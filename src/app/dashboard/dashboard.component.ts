import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  credit() {
    alert("Are you sure to proceed with transaction")
  }

  debit() {
    alert("Are you sure to proceed with transaction")
  }

  logout(){
    alert("Are you sure you want to exit")
    this.router.navigateByUrl('')
  }
}
