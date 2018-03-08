import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
