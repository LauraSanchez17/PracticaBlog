import { Injectable } from '@angular/core';


export interface Post {
  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: Date;
  categoria: string;
}


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private arrPost: Post[];

  constructor() {
    this.arrPost = [
      { titulo: 'Viajando por el norte de España', texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quaerat eligendi qui dicta ratione dolore nihil tempore repellat id deserunt.', autor: 'Autor1', imagen: 'https://descapada.com/wp-content/uploads/2018/11/rural-1-815x459.jpg', fecha: new Date('05/11/20'), categoria: 'España' },

      { titulo: 'Canarias: Recorriendo las islas', texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quaerat eligendi qui dicta ratione dolore nihil tempore repellat id deserunt.', autor: 'Autor2', imagen: 'https://ssl.tzoo-img.com/images/tzoo.98779.0.888426.SantaCruzDeTenerife.jpg?width=412&spr=3', fecha: new Date('06/11/20'), categoria: 'España' },

      { titulo: '10 días en Vietnam', texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quaerat eligendi qui dicta ratione dolore nihil tempore repellat id deserunt.', autor: 'Autor2', imagen: 'https://www.aerobusbcn.com/blog/wp-content/uploads/2019/06/leon-wong-683423-unsplash-4032x2016.jpg', fecha: new Date('05/11/20'), categoria: 'Asia' },

      { titulo: 'Descubre Machupichu', texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quaerat eligendi qui dicta ratione dolore nihil tempore repellat id deserunt.', autor: 'Autor1', imagen: 'https://gestion.pe/resizer/zaZq3P0ksXhSnXZ0RwNh6SvispQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg', fecha: new Date('07/11/20'), categoria: 'América' },

    ]
  }

  /* getAll(): Post[]{
    return this.arrPost
  } */

  getAll(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost)
    })


  }

  getByCategory(pCategoria: string) {
    return new Promise((resolve, reject) => {
      const arrayfiltrado = this.arrPost.filter(post => {
        return post.categoria === pCategoria
      });
      resolve(arrayfiltrado);
    });
  }


  getCategorias() {
    return new Promise((resolve, reject) => {
      const categorias = [];
      for (let post of this.arrPost) {
        if (categorias.includes(post.categoria)) {
          categorias.push(post.categoria);
        }
      }
      resolve(categorias);
    });
  }





}
