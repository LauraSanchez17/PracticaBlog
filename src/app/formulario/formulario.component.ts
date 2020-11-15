import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  postForm: FormGroup;
  constructor(private PostService: PostService) {
    this.postForm = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(50)
      ]),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      categoria: new FormControl(),
    })
  }

  ngOnInit(): void {

  }
  onSubmit() {
    const response = this.PostService.agregarPost(this.postForm.value);
    alert('Has añadido tu post correctamente, puedes ir a Blog para ver tu publicación')

  }
}
