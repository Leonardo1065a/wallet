import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { FullModule } from './layouts/full/full.module';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        data: {
          title: 'Overview!'
        },
        loadChildren: () =>
          import('./modules/overview/overview.module').then((m) => m.OverviewModule)
      },
      {
        path: 'wallet',
        data: {
          title: 'Wallet'
        },
        loadChildren: () => import('./modules/wallet/wallet.module').then((m) => m.WalletModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'overview'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FullModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
