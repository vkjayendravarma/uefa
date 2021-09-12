import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { InviteUserFormComponent } from './invite-user-form/invite-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FileUploadedComponent } from './file-uploaded/file-uploaded.component';

@NgModule({
  declarations: [
    FileUploaderComponent,
    InviteUserFormComponent,
    FileUploadedComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    FileUploaderComponent,
    InviteUserFormComponent,
    FileUploadedComponent,
  ],
})
export class FormUiElementsModule {}
