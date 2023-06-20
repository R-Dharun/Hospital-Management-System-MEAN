import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eyewear } from '../shared/models/Eyewear';
import { sampleEyewear, sampleTags } from 'src/data';
import { EYEWEAR_BY_SEARCH_URL, EYEWEAR_BY_TAG_URL, EYEWEAR_TAGS_URL, EYEWEAR_URL, EYEWEAR_BY_ID_URL } from '../shared/constants/urls';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class EyewearService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Eyewear[]> {
    return this.http.get<Eyewear[]>(EYEWEAR_URL);
  }

  getAllEyewearBySearchTerm(searchTerm:string) {
    return this.http.get<Eyewear[]>(EYEWEAR_BY_SEARCH_URL + searchTerm);
  }

  getEyewearById(eyewearId:string):Observable<Eyewear> {
    return this.http.get<Eyewear>(EYEWEAR_BY_ID_URL + eyewearId);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(EYEWEAR_TAGS_URL);
  }

  getAllEyewearByTag(tag: string): Observable<Eyewear[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Eyewear[]>(EYEWEAR_BY_TAG_URL + tag);
  }
}
