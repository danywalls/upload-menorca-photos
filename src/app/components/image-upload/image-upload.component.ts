import { Component } from '@angular/core';
import { FileSelectComponent } from '@progress/kendo-angular-upload';
import { EMPTY, catchError, tap } from 'rxjs';
import { FakeImageUploadService } from 'src/app/services/fake-image-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent {
  imagesUrl: Array<string> = [];

  constructor(private fakeImageUploadService: FakeImageUploadService) {}

  upload(pictureUploader: FileSelectComponent) {
    pictureUploader.fileList.files.forEach((file) => {
      const imageFile = file[0].rawFile;
      if (imageFile)
        this.fakeImageUploadService
          .uploadImage(imageFile)
          .subscribe((response) => {
            this.imagesUrl.push(response);
          });
    });

    pictureUploader.clearFiles();
  }
}
