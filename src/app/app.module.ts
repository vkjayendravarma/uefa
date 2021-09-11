import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { SideNavDashboardLayoutComponent } from './components/side-nav-dashboard-layout/side-nav-dashboard-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EmailTemplateComponent } from './components/email-template/email-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    SideNavDashboardLayoutComponent,
    LandingPageComponent,
    EmailTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
