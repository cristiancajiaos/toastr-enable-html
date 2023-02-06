import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  public triggerCommonToastr(): void {
    this.toastrService.success('Thanks :)', 'Done');
  }

  public triggerHtmlToastr(): void {
    this.toastrService.success('<strong>Thanks!</strong> :)', 'Done');
  }
}
