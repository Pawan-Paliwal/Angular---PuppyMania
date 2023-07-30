import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { loadingSpiner } from './loading spiner/loading-spiner';
import { Directivedropdown } from './dropdown-directive';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [AlertComponent, loadingSpiner, Directivedropdown,  FooterComponent],
  imports: [CommonModule],
  exports: [AlertComponent, loadingSpiner, Directivedropdown, CommonModule,FooterComponent],
})
export class sharedModule {}
