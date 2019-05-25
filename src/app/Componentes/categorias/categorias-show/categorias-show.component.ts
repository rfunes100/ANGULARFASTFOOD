import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { CompanyComponent } from 'app/company/company.component';



@Component({
  selector: 'app-categorias-show',
  templateUrl: './categorias-show.component.html',
  styleUrls: ['./categorias-show.component.scss']
})
export class CategoriasShowComponent implements OnInit {

  
  Gpsbrand: any = {
    ListGpsbrand: []
  };

  
  headeradd: any = {
    Empresa: '', 
    Observacion: '' , 
    IDTipoPago: 0,
    NumFactura: 0,
    CodRecibo: '',
    IdMesa: 0,
    Estado: ''
  };


  constructor(private commonservices: CategoriaService , private router: Router ,
    private routeActive: ActivatedRoute
      ) { }


      
  showproduct = new CompanyComponent( this.commonservices  ) ;



      Edit( id: number )
      {
        console.log('registarse');
        console.log(id);
        this.router.navigate([`producto/${id}`])
      }
  
  public refresh ()
  {

    
    console.log("ingreso a categorias de controlador");
    // se le manda la ruta a la cual se quiere hacer un get en el api 
    
    this.commonservices.getAll('/categorias').subscribe((data) => {
   // this.commonservices.getAll('gps-brands').subscribe((data) => {
      console.log('result ', data) ;
      this.Gpsbrand.ListGpsbrand = data ;
    })
    
    this.showproduct.cargapedido() ;
  }
  
  ngOnInit() {



    

    var operacion = this.routeActive.snapshot.params.id ; 
console.log(operacion) ; 
    if(   Number( operacion) !== 1) // operacion !== 1
    {

 console.log('Creo encabezado de pedido');
    const header ={
      Empresa: 'carnitas beneth',
      Observacion: 'pedido',
      IDTipoPago:1,
      NumFactura:1,
      CodRecibo:'0000001',
      IdMesa:1,
      Estado:'En Proceso'
    

    }

    
    this.commonservices.post('/HeadPedidos', header ).subscribe((data) => {
      // this.commonservices.getAll('gps-brands').subscribe((data) => {
         console.log('se agrego encabezado del producto', data) ;
        
        ;
       }) // /HeadPedidos
  
      } // operacion !== 1

      this.refresh() ; 

  } 

}
