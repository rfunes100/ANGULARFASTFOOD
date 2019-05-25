import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'app/services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasShowComponent } from 'app/Componentes/categorias/categorias-show/categorias-show.component';

@Component({
  selector: 'app-productos-show',
  templateUrl: './productos-show.component.html',
  styleUrls: ['./productos-show.component.scss']
})
export class ProductosShowComponent implements OnInit {

  constructor( private commonservices: CategoriaService ,
    private routeActive: ActivatedRoute , private router: Router  ) { }


  
  Gpsbrand: any = {
    ListGpsbrand: [],
    id: 0 
  };


  

  
  encaadd: any = {
    IDHDPedido: 0, 
    IDProducto: 0,
    Cantidad: 0,
    Total: 0
  };


  
  showCategory = new CategoriasShowComponent( this.commonservices , this.router , this.routeActive) ;


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

  Agregar( id: Number)
  {
   
  

    const detalle ={
      IDHDPedido: 0,
      IDProducto: id,
      Cantidad: this.encaadd.Cantidad,
      Total:1

    }

    console.log('detalle del pedido', detalle);

    this.commonservices.post('/DetPedidoes', detalle ).subscribe((datadet) => {
     // this.commonservices.getAll('gps-brands').subscribe((data) => {
        console.log('se agrego detalle del producto', datadet) ;
       
       // this.showCategory.refresh();
        this.router.navigate(['categoria/1']) ;
  
      }) // /DetPedidoes

    

  }

  ngOnInit() {
    this.refresh();
  }

}
