import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
  if (typeof control.value === 'string') {
    if (control.value.length === 0) {
      return null;
    }
    const isWhitespace = control.value.trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
  return null;
}
