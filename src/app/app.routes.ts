import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgGridDashboardComponent } from './ag-grid-dashboard/ag-grid-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimengDashboardComponent } from './primeng-dashboard/primeng-dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'aggrid', component: AgGridDashboardComponent },
    { path: 'primeng', component: PrimengDashboardComponent },
];
