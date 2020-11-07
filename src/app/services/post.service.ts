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
      { titulo: 'Titulo1', texto: 'Texto1', autor: 'Autor1', imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg', fecha: new Date('05/11/20'), categoria: 'comida' },

      { titulo: 'Titulo2', texto: 'Texto2', autor: 'Autor2', imagen: 'https://cocina-casera.com/wp-content/uploads/2011/10/perrito-caliente.jpg', fecha: new Date('06/11/20'), categoria: 'comida' },

      { titulo: 'Titulo3', texto: 'Texto3', autor: 'Autor2', imagen: 'https://www.aerobusbcn.com/blog/wp-content/uploads/2019/06/leon-wong-683423-unsplash-4032x2016.jpg', fecha: new Date('05/11/20'), categoria: 'viajes' },

      { titulo: 'Titulo4', texto: 'Texto4', autor: 'Autor1', imagen: 'https://gestion.pe/resizer/zaZq3P0ksXhSnXZ0RwNh6SvispQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg', fecha: new Date('07/11/20'), categoria: 'viajes' }
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

}
