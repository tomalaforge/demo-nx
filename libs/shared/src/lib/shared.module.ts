import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePipe } from './title.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TitlePipe],
})
export class SharedModule {}
