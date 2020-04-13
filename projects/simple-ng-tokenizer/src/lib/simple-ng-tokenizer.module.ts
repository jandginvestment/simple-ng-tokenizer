import { NgModule } from '@angular/core';
import { SimpleNgServiceService } from './services/simple-ng-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SimpleNgTokenizerInterceptor } from './interceptors/simple-ng-tokenizer.interceptor';



@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [],
  providers: [SimpleNgServiceService, { provide: HTTP_INTERCEPTORS, useClass: SimpleNgTokenizerInterceptor, multi: true }]
})
export class SimpleNgTokenizerModule { }
