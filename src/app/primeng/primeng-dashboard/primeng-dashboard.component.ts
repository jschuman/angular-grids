import { Component } from '@angular/core';
import { PrimengClientComponent } from '../primeng-client/primeng-client.component';
import { PrimengServerComponent } from '../primeng-server/primeng-server.component';

@Component({
  selector: 'app-primeng-dashboard',
  standalone: true,
  imports: [PrimengClientComponent, PrimengServerComponent],
  templateUrl: './primeng-dashboard.component.html',
  styleUrl: './primeng-dashboard.component.css'
})
export class PrimengDashboardComponent {

}
