import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private router: Router){}



  ngOnInit() {}

  goHome(){
    this.router.navigate(['/main/shop'])
  }

  goToShoppingCart(){
    this.router.navigate(['/main/shoppingCart'])
  }

  signOut(){
    this.router.navigate(['/auth'])
  }
}
