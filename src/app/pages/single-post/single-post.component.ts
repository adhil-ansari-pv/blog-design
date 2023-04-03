import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit{
  postData:any;
  similiarPostArray:any
  postImgpath!: string;
  category!:string;
  isFeatured!:boolean;
  views!:number;
  createdAt:any


  constructor(private route:ActivatedRoute , private postService:PostsService){}
  ngOnInit(): void {
    this.route.params.subscribe(val=>{
      this.postService.countViews(val['id'])
      this.postService.loadOnePost(val['id']).subscribe(post=>{
        this.postData = post;
        this.loadSimiliarPosts(this.postData.category.categoryId)
        this.postImgpath = this.postData.postImgPath
        this.category = this.postData.category.category
        this.isFeatured=this.postData.isFeatured
        this.views =this.postData.views
        this.createdAt =this.postData.createdAt
      })
    });
  }
  loadSimiliarPosts(catId:string){
    this.postService.loadSimiliar(catId).subscribe(val=>{
      this.similiarPostArray = val
    })
  }
}
