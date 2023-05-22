import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitlePipe } from './title.pipe';
import { UsernamePipe } from './username.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TitlePipe, UsernamePipe],
  exports: [TitlePipe, UsernamePipe],
})
export class SharedModule {}
