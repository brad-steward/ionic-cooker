/** @format */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListPage } from './list.page';

@NgModule({
	imports: [IonicModule, CommonModule, FormsModule, RouterModule.forChild([{ path: '', component: ListPage }])],
	declarations: [ListPage]
})
export class ListPageModule {}
