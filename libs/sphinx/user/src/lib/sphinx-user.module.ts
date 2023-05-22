import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@demo/shared';
import { BazComponent } from './baz/baz.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [BazComponent],
  exports: [BazComponent],
})
export class SphinxUserModule {}
