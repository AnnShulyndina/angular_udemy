import {NgModule} from "@angular/core";
import {AboutPageComponent} from "./about-page.component";
import {AboutExtraComponent} from "../../../../routing/src/app/about-extra/about-extra.component";
import {PageNamePipe} from "../shared/page-name.pipe";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AboutExtraPageComponent} from "./about-extra-page/about-extra-page.component";

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutExtraComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'about', component: AboutPageComponent, children: [
          {path: 'extra', component: AboutExtraPageComponent}
        ]
      },
    ])
  ],
  exports: [RouterModule]
})

export class AboutPageModule {

}
