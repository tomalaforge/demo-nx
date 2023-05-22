import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@demo/shared';
import { FooComponent } from './foo/foo.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [FooComponent],
  exports: [FooComponent],
})
export class SphinxAdminModule {}
