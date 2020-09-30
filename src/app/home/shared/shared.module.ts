import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    exports: [
        CommonModule,
        FormsModule,

        MatTabsModule,
        ReactiveFormsModule,

        MatSliderModule,
        MatSelectModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        MatExpansionModule,
        MatCardModule


    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,

        MatTabsModule,
        ReactiveFormsModule,
 
        MatSliderModule,
        MatSelectModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatCardModule

    ],
    declarations: [   ],
    providers: [ 
        MatDatepickerModule,  
     ],
})
export class SharedModule { }
