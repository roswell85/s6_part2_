import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginpageRoutingModule } from './loginpage-routing.module';
import { LoginpageComponent } from './loginpage.component';
import {PagesModule} from "../pages/pages.module";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    LoginpageComponent
  ],
  exports: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    LoginpageRoutingModule,
    PagesModule,
    CheckboxModule,
    ButtonModule,
    RippleModule,
    InputTextModule
  ]
})
export class LoginpageModule { }
