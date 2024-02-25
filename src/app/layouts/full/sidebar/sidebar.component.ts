import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menus = [
    { name: 'Overview', icon: 'dashboard' },
    { name: 'Wallet', icon: 'account_balance_wallet' },
    { name: 'Swap Crypto', icon: 'swap_horizontal_circle' },
    { name: 'Transactions', icon: 'schedule' },
    { name: 'Markets', icon: 'insert_chart' }
  ];
}
