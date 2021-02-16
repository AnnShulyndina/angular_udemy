import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {HomePageComponent} from './home-page/home-page.component'


@NgModule({
  imports: [RouterModule.forRoot([

    {path: '', component: HomePageComponent, pathMatch: 'full'},
    // {path: '', loadChildren: './about-page/about-page.module#AboutPageModule'}
    {path: '', loadChildren:()=> import(
      './about-page/about-page.module').then(
        m=> m.AboutPageModule
      )}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
