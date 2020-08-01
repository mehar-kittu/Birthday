import { RoorkeeComponent } from './tag/roorkee.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './tag/navbar.component';
import { ThreeComponent } from './home/three.component';
import { TagComponent } from './tag/tag.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WishesComponent } from './wishes/wishes.component';
import { MemoryLaneComponent } from './memory-lane/memory-lane.component';
import { CertificateComponent } from './certificate/certificate.component';
import { FormsModule } from '@angular/forms';
import { AgraComponent } from './tag/agra.component';
import { MumbaiComponent } from './tag/mumbai.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TagComponent,
    ThreeComponent,
    NavbarComponent,
    WishesComponent,
    MemoryLaneComponent,
    CertificateComponent,
    RoorkeeComponent,
    AgraComponent,
    MumbaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'three/journey',
        component:MemoryLaneComponent
      },
      {
        path:'three/trips/roorkee',
        component:RoorkeeComponent
      },
      {
        path:'three/trips/agra',
        component:AgraComponent
      },
      {
        path:'three/trips/mumbai',
        component:MumbaiComponent
      },
      {
        path:'three/trips',
        component:TagComponent
      },
      {
        path:'three/wishes',
        component:WishesComponent
      },
      {
        path:'three',
        component:ThreeComponent
      },
      {
        path:'certificate',
        component:CertificateComponent
      }
      
    ]),
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [NavbarComponent],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
