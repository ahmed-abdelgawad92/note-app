import { 
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
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
        MatCardModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatIconModule,  
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ],
})
export class CustomMaterialModule { }