import { FormControl } from '@angular/forms';

import { RANGE_REGEXP } from '../../constants';

export function validateTemperatureRange(c: FormControl): {[key: string]: boolean} {
    if (c.value.length > 0) {
        return c.value.match(RANGE_REGEXP) ? null
            : {invalidTemperatureRange: true};
    }
}
