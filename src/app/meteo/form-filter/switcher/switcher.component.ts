import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SwitcherComponent),
    multi: true
};

@Component({
    selector: 'wapi-checkbox',
    templateUrl: 'switcher.component.html',
    styleUrls: ['switcher.component.css'],
    providers: [CUSTOM_CHECKBOX_VALUE_ACCESSOR]
})

export class SwitcherComponent implements ControlValueAccessor {
    @Input('value') val: boolean = false;

    onChange: any = () => {
    };

    onTouched: any = () => {
    };

    get value(): boolean {
        return this.val;
    }

    set value(val) {
        this.val = val;
        this.onChange(val);
        this.onTouched();
    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    toggle() {
        this.value = !this.value;
    }
}