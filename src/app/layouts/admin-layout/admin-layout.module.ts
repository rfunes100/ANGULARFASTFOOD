import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
 import { CompanyComponent } from '../../company/company.component';
 import { CategoriasShowComponent } from '../../Componentes/categorias/categorias-show/categorias-show.component';
 import { ProductosShowComponent } from '../../Componentes/productos/productos-show/productos-show.component';

 

 import {
  DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxCheckBoxModule,
  DxPivotGridModule,
  DxTextBoxModule,
  DxDateBoxModule,
  DxButtonModule,
  DxValidatorModule,
  DxValidationSummaryModule,
  DxLookupModule,
  DxPopupModule,
  DxFileUploaderModule,
  DxTemplateModule,
  DxChartModule,
  DxTextAreaModule,
  DxFormModule,
  DxFormComponent,
  DxTooltipModule,
  DxTileViewModule,
  DxSchedulerModule,
  DxLoadPanelModule,
  DxRadioGroupModule,
  DxListModule
} from 'devextreme-angular';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxChartModule,
    DxPivotGridModule,
    DxLookupModule,
    DxPopupModule,
    DxFileUploaderModule,
    DxTemplateModule,
    DxChartModule,
    DxTextAreaModule,
    DxFormModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxTooltipModule,
    DxTileViewModule,
    DxSchedulerModule,
    DxLoadPanelModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CompanyComponent,
    CategoriasShowComponent,
    ProductosShowComponent ,
  ]
})

export class AdminLayoutModule {}
