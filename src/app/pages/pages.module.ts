import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { HomePageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        HomePageComponent,
        DashboardComponent
    ],
    providers:[]
})

export class PagesModule { }
