import { Component,OnInit } from '@angular/core';
import { EyewearService } from 'src/app/services/eyewear.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(eyewearService:EyewearService) {
    eyewearService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
   }
  ngOnInit(): void {

  }
}
