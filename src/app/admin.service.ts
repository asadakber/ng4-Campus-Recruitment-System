import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';
@Injectable()
export class AdminService {

  constructor(private db: AngularFireDatabase,private afauth: AngularFireAuth, private router: Router) {}


}
