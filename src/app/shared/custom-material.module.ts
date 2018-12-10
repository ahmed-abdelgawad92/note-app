import { 
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatIconModule, 
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatIconModule,  
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ],
})
export class CustomMaterialModule { }