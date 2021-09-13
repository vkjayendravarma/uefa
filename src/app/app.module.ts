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
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { HeaderModule } from './modules/uikit/header/header.module';
import { ActivitiesModule } from './modules/uikit/global/activities/activities.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    SideNavDashboardLayoutComponent,
    LandingPageComponent,
    NotificationsComponent,
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
    HeaderModule,
    ActivitiesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
