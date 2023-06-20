import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EyewearService } from 'src/app/services/eyewear.service';
import { Eyewear } from 'src/app/shared/models/Eyewear';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eyewear:Eyewear[] = [];
  constructor(private eyewearService:EyewearService, activatedRoute:ActivatedRoute) {
    let eyewearObservalbe:Observable<Eyewear[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        eyewearObservalbe = this.eyewearService.getAllEyewearBySearchTerm(params.searchTerm);
      else if (params.tag)
        eyewearObservalbe = this.eyewearService.getAllEyewearByTag(params.tag);
      else
        eyewearObservalbe = eyewearService.getAll();

      eyewearObservalbe.subscribe((serverEyewear) => {
        this.eyewear = serverEyewear;
      })

    })
  }

  ngOnInit(): void {

  }
}
