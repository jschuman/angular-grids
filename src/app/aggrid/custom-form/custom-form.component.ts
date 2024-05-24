import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  standalone: true,
})
export class CustomFormComponent implements OnInit {

  id: string | null = null;

  constructor(private readonly router: Router) { 
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      this.id = state?.['id'];
    }
  }

  ngOnInit(): void {
   
  }
}
