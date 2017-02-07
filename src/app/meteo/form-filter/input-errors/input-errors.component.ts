import { Component, Input, DoCheck } from '@angular/core';

@Component({
    selector: 'wapi-input-errors',
    templateUrl: 'input-errors.component.html'
})

export class InputErrorsComponent implements DoCheck {
    @Input() control: any;
    @Input() messages: any;

    errorMessage: string = '';
    validMessage: string = '';

    ngDoCheck(): void {
        const errors: boolean = this.control.dirty && this.control.errors;
        const valid: boolean = this.control.dirty && !this.control.errors;

        this.errorMessage = '';
        this.validMessage = '';

        if (errors) {
            Object.keys(this.messages.errors).some((key: string) => {
                if (errors[key]) {
                    this.errorMessage = this.messages.errors[key];
                    return true;
                }
            });
        }

        if (valid) {
            this.validMessage = this.messages.valid;
        }
    }
}
