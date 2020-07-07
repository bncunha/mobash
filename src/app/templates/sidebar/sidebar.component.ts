import { Component, OnInit } from '@angular/core';

type ItemMenu = {
  name: string,
  link: string,
  icon: string
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  itensMenu: ItemMenu[] = [{
    name: 'Dashboard',
    link: '',
    icon: 'fas fa-chart-bar'
  }, {
    name: 'Lalalaa',
    link: '/lalalaa',
    icon: 'fas fa-chart-bar',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
