import { Component } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent
} from '@coreui/angular';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  imports: [
    CardComponent, 
    CardBodyComponent, 
    CardHeaderComponent,
    RowComponent, 
    ColComponent
  ]
})
export class DashboardComponent {
  // Boş dashboard - içerik eklemek için buraya kod yazabilirsiniz
}
