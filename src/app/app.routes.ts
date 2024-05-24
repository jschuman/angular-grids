import { Routes } from '@angular/router';
import { AgGridDashboardComponent } from './aggrid/ag-grid-dashboard/ag-grid-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimengDashboardComponent } from './primeng/primeng-dashboard/primeng-dashboard.component';
import { CustomFormComponent } from './aggrid/custom-form/custom-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'aggrid', component: AgGridDashboardComponent },
    { path: 'primeng', component: PrimengDashboardComponent },
    { path: 'custom-form', component: CustomFormComponent }
];
