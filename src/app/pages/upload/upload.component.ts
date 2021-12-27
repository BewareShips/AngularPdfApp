import { UploadService } from '../../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { CustomerSend } from 'src/app/Models/CustomerSend';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {

  custno=''
  progress = 0;
  successmsg = '';
  errmsg='';
  cust:CustomerSend=
  {
    file:[]
  }
  image:boolean=false


  imageToShow: any;

createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}


  FileDetail!: Observable<any>;

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
    // this.FileDetail = this.uploadService.getFiles();
  }
  
  chooseFile(event:any ): void {
    this.cust.file=event.target.files[0]
    console.log(this.cust)
  }   
  upload():void
  {
    this.uploadService.postFiles(this.cust).subscribe(
      data=>
      {
        this.successmsg="Hi!! Your Account Number is "+data+" and Your Expences spend on"
        this.custno=data
        this.uploadService.getVisualmage(this.custno).subscribe(
          data=>
          {
            this.createImageFromBlob(data);
          }
        )
        this.errmsg=''
        this.image=true
      }, (error) => {
        this.errmsg = 'Error in Uploading the data!! Please check your pdf statement';
        this.successmsg=''
        this.image=false
      }
    )

  }

}
