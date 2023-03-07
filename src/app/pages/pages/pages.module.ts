import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NavComponent } from './nav/nav.component';
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {TabMenuModule} from "primeng/tabmenu";


@NgModule({
  declarations: [
    PagesComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MenubarModule,
    ButtonModule,
    TabMenuModule
  ],exports:[PagesComponent]
})
export class PagesModule { }
