import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  featuredPostsArray:any;
  latestPostsArrray:any;

  constructor(private postService:PostsService){
    this.postService.loadFeatured().subscribe(val=>{
      this.featuredPostsArray=val;
    });
    this.postService.loadLatest().subscribe(val=>{
      this.latestPostsArrray=val
    })
  }


}
