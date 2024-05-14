import { Component } from '@angular/core';
import { AggridClientComponent } from '../aggrid-client/aggrid-client.component';
import { AggridServerComponent } from '../aggrid-server/aggrid-server.component';

@Component({
  selector: 'app-ag-grid-dashboard',
  standalone: true,
  imports: [AggridClientComponent, AggridServerComponent],
  templateUrl: './ag-grid-dashboard.component.html',
  styleUrl: './ag-grid-dashboard.component.css'
})
export class AgGridDashboardComponent {

}
