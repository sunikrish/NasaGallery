import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Data, Gallery, searchqueryParam } from 'src/model/gallary';
import { NasaService } from './services/nasa.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DilogueComponent } from './shared/dilogue/dilogue.component';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
//import { DilogueComponent } from './simpleDialog.component';
// import {ScrollingModule, ScrollDispatcher} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Nasa Library';
  mediaSub: any;
  deviceXs: any;
  query = '';
  queryValues : searchqueryParam;
  public nasaObj :any;
  simpleDialog: any;
  form: FormGroup = new FormGroup({});
  constructor (public mediaObserver: MediaObserver,private dialogModel: MatDialog, private fb: FormBuilder, private nasaApi:NasaService) {
    //this.nasaObj=new Gallery();
    this.queryValues = new searchqueryParam();
    
  }
  
  topVal = 0;
  onScroll(e:any) {
    let scrollXs = this.deviceXs ? 55 : 73;
    if (e.srcElement.scrollTop < scrollXs) {
      this.topVal = e.srcElement.scrollTop;
    } else {
      this.topVal = scrollXs;
    }
  }
  sideBarScroll() {
    let e = this.deviceXs ? 160 : 130;
    return e - this.topVal;
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      query: [null, [Validators.required, Validators.maxLength(100)]],
      media_type : null,
      startyear: [null, [Validators.maxLength(4), Validators.minLength(4),Validators.min(1000)]],
      endyear: [null, [Validators.maxLength(4), Validators.minLength(4),Validators.min(1000)]],
      
    });

    this.mediaSub = this.mediaObserver.asObservable().subscribe((change) => {
      change.forEach((res) => {
        console.log(res.mqAlias);
        this.deviceXs = res.mqAlias === "xs" ? true : false;
      });
      
    })
   
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
  saveDetails(form: any) {
    this.queryValues.searchText = this.form.get('query')?.value;
    this.queryValues.mediatype = this.form.get('media_type')?.value;
    this.queryValues.startyear = this.form.get('startyear')?.value;
    this.queryValues.endyear = this.form.get('endyear')?.value;

    this.nasaApi.getNasaImage(this.queryValues).subscribe((response :Gallery)=>{
      console.log(this.form.get('query')?.value);
      this.nasaObj = response.collection;   
      console.log(response);
      console.log(this.nasaObj);   
     });
  }

  public onCancel = () => {
    // this.form.get('query').setValue(null);
    // this.form.get('media_type')?.value;
    //  this.form.get('startyear')?.value;
    //  this.form.get('endyear')?.value;
    
    this.nasaObj = null;
  }
 public GetImageDetails(nasadata:Data[]) 
 {
  const dialogConfig = new MatDialogConfig();

dialogConfig.data = {
    
    description: nasadata[0]?.description,
    date_created: nasadata[0]?.date_created,
    nasa_id: nasadata[0]?.nasa_id,
    title :nasadata[0]?.title
 };
  this.simpleDialog = this.dialogModel.open(DilogueComponent, dialogConfig);
 }

  clickFunction() {
   this.queryValues.searchText = this.form.get('query')?.value;
   this.queryValues.mediatype = this.form.get('media_type')?.value;
   this.queryValues.mediatype = this.form.get('startyear')?.value;
   this.queryValues.mediatype = this.form.get('endyear')?.value;
   this.nasaApi.getNasaImage(this.form.get('query')?.value).subscribe((response :Gallery)=>{
    this.nasaObj = response.collection;
    console.log(this.nasaObj);
   
   });

 
  }
}
