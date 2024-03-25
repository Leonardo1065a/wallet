import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FullComponent } from './full.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [FullComponent, SidebarComponent, ToolbarComponent],
  imports: [CommonModule, RouterModule],
  providers: []
})
export class FullModule {}
