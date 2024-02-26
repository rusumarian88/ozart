import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HederComponent } from './components/heder/heder.component';
import { SectionComponent } from './components/section/section.component';
import { SectionWithTitleComponent } from './components/section-with-title/section-with-title.component';
import { WhatIDoComponent } from './components/what-i-do/what-i-do.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    HederComponent,
    SectionComponent,
    SectionWithTitleComponent,
    WhatIDoComponent,
    ExperienceCardComponent,
    IndicatorsComponent,
    BlogCardComponent,
    PortfolioCardComponent,
    ProjectCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
