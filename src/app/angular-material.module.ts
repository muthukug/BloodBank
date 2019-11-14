import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule
    
  ]
})

export class AngularMaterialModule {}