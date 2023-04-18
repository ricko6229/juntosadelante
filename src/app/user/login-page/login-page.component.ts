import { Component, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SharedModule } from 'src/app/shared/shared.module';

@Injectable()
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit() {
    
  }
}
