import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingComponent } from './landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'crisis-center', component: CrisisListComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})

export class AppRoutingModule {}