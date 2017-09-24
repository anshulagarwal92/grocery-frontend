import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'dashboard', component: DashboardComponent }
];

export const routing = RouterModule.forRoot(routes);
