import {Inject, Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, take } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { Gallery, searchqueryParam } from 'src/model/gallary';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class NasaService {
  //private apiKey = environment.NASA_KEY;
  private queryParam ='';
  constructor(private http: HttpClient) {}
 
  // public getNasaImage(param:searchqueryParam): Observable<Gallery> {
    
  //   const year = new Date().getFullYear();
  //   const month = new Date().getMonth() + 1;
  //   const day = new Date().getDate();
  //   if(param.searchText)
  //   {
  //     console.log("search=")
  //       this.queryParam = '?q='+param.searchText;
  //       console.log("search="+this.queryParam);
  //   }
  //   if(param.mediatype)
  //   {
  //     this.queryParam = this.queryParam == '' ? '?media_type='+param.mediatype : this.queryParam.concat('&media_type='+param.mediatype) ;
  //     console.log("media type="+this.queryParam);
  //   } 
  //   if(param.startyear)
  //   {
  //     this.queryParam = this.queryParam == '' ? '?year_start='+param.startyear : this.queryParam.concat('&year_start='+param.startyear) ;
  //   }
  //   if(param.endyear)
  //   {
  //     this.queryParam = this.queryParam == '' ? '?year_end='+param.endyear : this.queryParam.concat('&year_end='+param.endyear) ;
  //   }

  //   console.log("query string "+this.queryParam);
  //  // this.apiKey = environment.NASA_KEY;
  //   //const apodUrl = `https://images-api.nasa.gov/search${this.queryParam}`;
  //   const apodUrl=`http://localhost:4229/api/NasaLibrary/data${this.queryParam}`;
  //   return this.http.get<Gallery>(apodUrl).pipe(
  //     take(10),
  //     catchError((err: any) => {
  //       return throwError(() => err);
  //     })
  //   );
  // }

  public getNasaImage(param:searchqueryParam): Observable<Gallery> {
    
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    if(param.searchText)
    {
      console.log("search=")
        this.queryParam = '?FreeText='+param.searchText;
        console.log("search="+this.queryParam);
    }
    if(param.mediatype)
    {
      this.queryParam = this.queryParam == '' ? '?MediaType='+param.mediatype : this.queryParam.concat('&MediaType='+param.mediatype) ;
      console.log("media type="+this.queryParam);
    } 
    if(param.startyear)
    {
      this.queryParam = this.queryParam == '' ? '?StartYear='+param.startyear : this.queryParam.concat('&StartYear='+param.startyear) ;
    }
    if(param.endyear)
    {
      this.queryParam = this.queryParam == '' ? '?EndYear='+param.endyear : this.queryParam.concat('&EndYear='+param.endyear) ;
    }

    console.log("query string "+this.queryParam);
   // this.apiKey = environment.NASA_KEY;
    //const apodUrl = `https://images-api.nasa.gov/search${this.queryParam}`;
    const apodUrl=`http://localhost:4229/api/NasaLibrary/data${this.queryParam}`;
    return this.http.get<Gallery>(apodUrl).pipe(
      take(10),
      catchError((err: any) => {
        return throwError(() => err);
      })
    );
  }
}