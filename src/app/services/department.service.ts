import {Injectable} from '@angular/core';
import {Department} from "../model/department";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Department[] = [];
  private url: string = "http://localhost:8080/departments/";

  constructor(private http: HttpClient) {
  }

  public add(department: Department) {
    return this.http.post<Department[]>(this.url, department);
  }

  public edit(department: Department) {
    return this.http.put<Department[]>(this.url + department._id, department);
  }

  public selectAll() {
    return this.http.get<Department[]>(this.url);
  }

  public select(id: number) {
    return this.departments.find(p => p._id === id);
  }

  public delete(id: number) {
    return this.http.delete<Department>(this.url + id);
  }
}
