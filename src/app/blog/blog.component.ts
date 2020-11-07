import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  arrayPost: Post[];

  constructor(
    private PostService: PostService
  ) { }

  ngOnInit(): void {
    this.PostService.getAll()
      .then((arrPost) => {
        this.arrayPost = arrPost

      })

  }

}
