import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import * as firebase from 'firebase/app';
import { CompanyService } from '../company.service';
import {AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';
@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class StudentviewComponent implements OnInit {
  name: any;
  uid;
  viewprofile: FirebaseListObservable<any>;
  tableview = [];
  userview;
  constructor(private db:AngularFireDatabase,private companyservice: CompanyService ,public afauth: AngularFireAuth) { 
    this.afauth.authState.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

    this.studentView();
  }

  studentView(){
    this.viewprofile = this.db.list('/STD/', {preserveSnapshot:true})
    this.viewprofile.subscribe(user => {
      user.forEach(element => {
        this.tableview.push(element.val());
      });
    })
    console.log("clicked")
  }

  ngOnInit() {
  }

}
