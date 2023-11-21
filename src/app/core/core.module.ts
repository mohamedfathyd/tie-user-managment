import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';

import { NotifierComponent } from './components/notifier/notifier.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainInterceptor } from './main.interceptor';
import { MaterialModule } from '../material.module';
import { ConfirmInputComponent } from './components/confirm-input/confirm-input.component';
import { NotificationComponent } from './components/notificaiton/notification.component';


@NgModule({
  declarations: [LoadingComponent,NotifierComponent,NotificationComponent,ConfirmInputComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,MaterialModule,
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true },
    DatePipe
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
    NotifierComponent,
    ConfirmInputComponent,
    NotificationComponent
  ]
})
export class CoreModule { }
