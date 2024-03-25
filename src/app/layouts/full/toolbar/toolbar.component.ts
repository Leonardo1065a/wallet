import { Component } from '@angular/core';
import { TitleToolbarService } from 'app/core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  _title: Observable<any>;

  constructor(titleToolbarService: TitleToolbarService) {
    this._title = titleToolbarService.title;
  }
}
