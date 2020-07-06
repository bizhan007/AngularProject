import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  create(user): Observable<any> {
    console.log(user);
    return this.http.post<any>('http://localhost:3000/users', user);
  }

  dbURl = 'http://localhost:3000/users'

  getData(){
    return this.http.get<any>(this.dbURl);
  }

  deleteData (id: number): Observable<any>{
    const url = `${this.dbURl}/${id}`
    return this.http.delete(url)
  }

  getUserById(id:number){
    const url =`${this.dbURl}/${id}`
    return this.http.get<any>(url)
  }
}
