import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingComponent } from './pages/greeting/greeting';
import { AboutComponent } from './pages/about/about';
import { GroupsComponent } from './pages/groups/groups';

const routes: Routes = [
  { path: '', redirectTo: 'greeting', pathMatch: 'full' },
  { path: 'greeting', component: GreetingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'groups/:id', component: GroupsComponent },
  { path: '**', redirectTo: 'greeting' }, // редирект на приветствие при неверном URL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
