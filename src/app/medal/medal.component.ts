import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-medal',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './medal.component.html',
  styleUrl: './medal.component.css'
})
export class MedalComponent {
  @Input() data!: string;
  @Input() field!: string;

  public style: Object = {}

  ngOnInit() { 
    this.style = {
      "background-color": this.field == "bronze" ? "#CD7F32" : this.field,
    }
 }
}
