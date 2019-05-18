import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'app/services/categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-show',
  templateUrl: './productos-show.component.html',
  styleUrls: ['./productos-show.component.scss']
})
export class ProductosShowComponent implements OnInit {

  constructor( private commonservices: CategoriaService ,
    private routeActive: ActivatedRoute ) { }


  
  Gpsbrand: any = {
    ListGpsbrand: [],
    id: 0 
  };
  
  public refresh ()
  {

  
    console.log("ingreso a marcas gps controlador");
    // se le manda la ruta a la cual se quiere hacer un get en el api 
    this.Gpsbrand.id = this.routeActive.snapshot.params.id ; 

    this.commonservices.getOnly('/Productoes', this.Gpsbrand.id  ).subscribe((data) => {
   // this.commonservices.getAll('gps-brands').subscribe((data) => {
      console.log('result ', data) ;
      this.Gpsbrand.ListGpsbrand = data ;
    })

  }

  ngOnInit() {
    this.refresh();
  }

}
