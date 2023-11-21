import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginInterFace } from '../../authentication/models/login-model';
import { UsersInterFace } from '../models/users-model';
import { DepartmentsInterFace } from '../models/departments-model';
import { PerformancesInterFace } from '../models/performancs-model';

@Injectable({
  providedIn: 'root'
})
export class HomeScreenService {
  private baseUrl="assets/fake-json/";
  constructor(private httpc: HttpClient) { }
  refreshToken(body): Observable<LoginInterFace>{
    let headers = new HttpHeaders();
    headers.append("No-Auth", "True");
    headers.append("Content-Type", "application/json; charset=utf-8");  
    return this.httpc.post<LoginInterFace>(this.baseUrl+"User/RefreshToken", body, { headers: headers });
  }
  getUsers() : Observable<UsersInterFace>{
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.get<UsersInterFace>(this.baseUrl+"users-list.json",  { headers: headers });
  }
  getUserInfo() : Observable<UsersInterFace>{
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.get<UsersInterFace>(this.baseUrl+"user-data.json",  { headers: headers });
  }
  getDepartments() : Observable<DepartmentsInterFace>{
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.get<DepartmentsInterFace>(this.baseUrl+"departments-list.json",  { headers: headers });
  }
  getPerformances() : Observable<PerformancesInterFace>{
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.get<PerformancesInterFace>(this.baseUrl+"performances-list.json",  { headers: headers });
  }
}