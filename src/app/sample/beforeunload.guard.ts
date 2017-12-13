import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface OnBeforeunload {
  shouldConfirmOnBeforeunload: () => boolean;
}

@Injectable()
export class BeforeunloadGuard implements CanDeactivate<OnBeforeunload> {
  canDeactivate(component: OnBeforeunload) {
    if (component.shouldConfirmOnBeforeunload()) {
      const msg = 'このページを離れてもよろしいですか？'
        + '\n行った変更が保存されない可能性があります。';
      return confirm(msg);
    }
    return true;
  }
}
