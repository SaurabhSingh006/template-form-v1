import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SimpleComponent } from './components/simple/simple.component';
import { GridFormComponent } from './components/grid-form/grid-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'simple-form',
    component: SimpleComponent
  },
  {
    path: 'grid-form',
    component: GridFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
