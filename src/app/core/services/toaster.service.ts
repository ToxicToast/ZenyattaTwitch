import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }

  showSuccess(title: string, body?: string) {
    this.toastr.success(body, title);
  }

  showInfo(title: string, body?: string) {
    this.toastr.info(body, title);
  }
}
