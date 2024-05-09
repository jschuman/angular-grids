import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AggridComponent } from './aggrid/aggrid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AggridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Grid experimentation';
}
