import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AggridClientComponent } from './aggrid-client/aggrid-client.component';
import { AggridServerComponent } from './aggrid-server/aggrid-server.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Grid experimentation';
}
