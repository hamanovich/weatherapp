import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'wapi-input-errors',
    templateUrl: 'input-errors.component.html'
})

export class InputErrorsComponent implements OnChanges {
    @Input() inputErrors: string;
    @Input() inputValid: string;
    @Input() errorsState: string;

    errorMessage: string = '';
    validMessage: string = '';

    ngOnChanges(changes: any): void {
        const errors: any = changes.inputErrors.currentValue;

        this.errorMessage = '';
        this.validMessage = '';

        if (changes.errorsState) {
            return;
        }

        if (errors) {
            Object.keys(this.errorsState).some((key: string) => {
                if (errors[key]) {
                    this.errorMessage = this.errorsState[key];
                    return true;
                }
            });
        } else {
            this.validMessage = this.inputValid;
        }
    }
}