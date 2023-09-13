import { Component } from '@angular/core';
import { FileSelectComponent, UploadComponent } from '@progress/kendo-angular-upload';
import { EMPTY, catchError, tap } from 'rxjs';
import { FakeImageUploadService } from 'src/app/services/fake-image-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent {
  imagesUrl: Array<string> = [];

  onFinish(file: UploadComponent) {
    file.clearFiles();
  }

  onSave(a : any) {
    this.imagesUrl.push('https://random.imagecdn.app/500/150');
  }
}
