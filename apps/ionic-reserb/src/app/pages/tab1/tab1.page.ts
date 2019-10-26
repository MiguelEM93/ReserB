import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit(): void {
    console.log('This was an init message');
  }

  toItems() {
    this.router.navigate(['/home/tab2']);
  }

}
