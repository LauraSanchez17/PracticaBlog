import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  arrayPost: Post[];
  categorias

  constructor(
    private PostService: PostService
  ) { }

  ngOnInit(): void {
    this.PostService.getAll()
      .then((arrPost) => {
        this.arrayPost = arrPost

      })

    this.PostService.getCategorias()
      .then(arrCategorias => this.categorias = arrCategorias);

  }

  async onChangeCategoria($event) {
    if ($event.target.value === 'todos') {
      this.arrayPost = await this.PostService.getAll();
    } else {
      this.arrayPost = await this.PostService.getByCategory($event.target.value)
    }


  }
}
