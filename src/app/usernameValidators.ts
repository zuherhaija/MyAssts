import { FormControl } from '@angular/forms';
import { promise } from 'protractor';
import { resolve } from 'path';
import { reject } from 'q';

export class UsernameValidators {
  static cannotContainSpace(control: FormControl) {
    if (control.value.indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  static shouldBeUnique(control: FormControl) {
    return new Promise((resolve, _reject) =>  {
      setTimeout(function() {
        if (control.value == 'mosh') {
        resolve({shouldBeUnique: true});
        } else {
        resolve(null);
        }      }, 1000);
    });
    if (control.value.indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }


}
