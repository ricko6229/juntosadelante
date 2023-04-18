import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule} from '@angular/fire/compat'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CalculadorasComponent } from './calculadoras/calculadoras.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraFiftythirtyComponent } from './calculadora-fiftythirty/calculadora-fiftythirty.component';
import { CalculadoraMensualidadHipotecaComponent } from './calculadora-mensualidad-hipoteca/calculadora-mensualidad-hipoteca.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CalculadoraMensualidadDeAutomovilComponent } from './calculadora-mensualidad-automovil/calculadora-mensualidad-automovil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalculadorasComponent,
    CalculadoraFiftythirtyComponent,
    CalculadoraMensualidadHipotecaComponent,
    CalculadoraMensualidadDeAutomovilComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }