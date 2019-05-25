import { CommonService } from './../Servicios/common.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../class/Company'
import { CategoriaService } from 'app/services/categoria.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
 
  Companies: Company[] ; 

  solicitudes: any = {
    ListadoSolicitudes: []
  };


   constructor( private commonservices: CategoriaService) { }
   p: number = 1;


    cargapedido()
    {
      this.commonservices.getAll('/DetPedidoes').subscribe((data) => {
        // this.commonservices.getAll('gps-brands').subscribe((data) => {
           console.log('result ', data) ;
           this.solicitudes.ListadoSolicitudes = data ;
         })

    } 

  ngOnInit() {

/*
    this.commonservices.getAlld().subscribe((data) => {
      console.log('result ', data) ;
      this.solicitudes.ListadoSolicitudes = data ;
    })
    */

    

  //  this.commonservices.getAlld().subscribe(Companies => this.Companies = Companies
    //  console.log('result ' ) ;
    //  this.solicitudes.ListadoSolicitudes = data ;
   // )
  }

}
