// import { AppModule } from './app.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// impoet Component
import { HomeComponent } from './home/home.component';
import { ProductServicesComponent } from './product-services/product-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsEventComponent } from './news-event/news-event.component';
import { ApplicationComponent } from './application/application.component';




const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full", // 當路徑是空的時候轉址到 home
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "ProductServices",
    component: ProductServicesComponent,
  },
  {
    path: "Application",
    component: ApplicationComponent,
  },
  {
    path: "NewsEvent",
    component: NewsEventComponent,
  },
  {
    path: "AboutUs",
    component: AboutUsComponent,
  },
  {
    path: "ContactUs",
    component: ContactUsComponent,
  },
  // {
  //   path: "**",
  //   component: HomeComponent, // 萬用路徑，路由沒有比對到，永遠會執行
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
