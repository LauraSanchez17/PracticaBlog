import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postElegido

  constructor(private PostService: PostService, private router: ActivatedRoute) {
    this.postElegido = {}
  }

  ngOnInit(): void {
    this.postElegido = this.PostService.getPostElegido(this.router.snapshot.params['id'])
  }

}
