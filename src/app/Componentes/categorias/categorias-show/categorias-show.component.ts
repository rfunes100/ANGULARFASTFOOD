import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';



@Component({
  selector: 'app-categorias-show',
  templateUrl: './categorias-show.component.html',
  styleUrls: ['./categorias-show.component.scss']
})
export class CategoriasShowComponent implements OnInit {

  
  Gpsbrand: any = {
    ListGpsbrand: []
  };

  constructor(private commonservices: CategoriaService , private router: Router 
      ) { }


      Edit( id: number )
      {
        console.log('registarse');
        console.log(id);
        this.router.navigate([`producto/${id}`])
      }
  
  public refresh ()
  {

  
    console.log("ingreso a marcas gps controlador");
    // se le manda la ruta a la cual se quiere hacer un get en el api 
    
    this.commonservices.getAll('/categorias').subscribe((data) => {
   // this.commonservices.getAll('gps-brands').subscribe((data) => {
      console.log('result ', data) ;
      this.Gpsbrand.ListGpsbrand = data ;
    })

  }
  
  ngOnInit() {
    this.refresh() ; 
  }

}
