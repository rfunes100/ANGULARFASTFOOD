import { CommonService } from './../Servicios/common.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../class/Company'


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


   constructor( private commonservices: CommonService) { }

  ngOnInit() {


    this.commonservices.getAlld().subscribe((data) => {
      console.log('result ', data) ;
      this.solicitudes.ListadoSolicitudes = data ;
    })

  //  this.commonservices.getAlld().subscribe(Companies => this.Companies = Companies
    //  console.log('result ' ) ;
    //  this.solicitudes.ListadoSolicitudes = data ;
   // )
  }

}
