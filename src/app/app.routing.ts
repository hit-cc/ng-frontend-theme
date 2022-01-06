import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components/components.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SignupComponent } from "./components/signup/signup.component";
import { NucleoiconsComponent } from "./components/nucleoicons/nucleoicons.component";
import { ErrorPageComponent } from "./components/error-page/error-page.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "components",
    component: ComponentsComponent,
  },
  { path: "user-profile", component: ProfileComponent },
  { path: "signup", component: SignupComponent },
  { path: "nucleoicons", component: NucleoiconsComponent },
  { path: "404", component: ErrorPageComponent },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
