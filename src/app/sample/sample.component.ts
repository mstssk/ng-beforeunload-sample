import { Component, HostListener } from '@angular/core';

import { OnBeforeunload } from './beforeunload.guard';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnBeforeunload {

  data = '';

  shouldConfirmOnBeforeunload() {
    return !!this.data;
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnload(e: Event) {
    if (this.shouldConfirmOnBeforeunload()) {
      e.returnValue = true;
    }
  }
}
