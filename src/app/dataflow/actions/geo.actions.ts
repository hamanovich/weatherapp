import { Action } from '@ngrx/store';

import CurrentPosition from '../../models/position';

export const ActionTypes = {
    GET_POSITION: '[GEO] GET POSITION',
    GET_POSITION_SUCCESS: '[GEO] GET POSITION SUCCESS',
    GET_POSITION_FAIL: '[GEO] GET POSITION FAIL'
};

export class GetPositionAction implements Action {
    type: string = ActionTypes.GET_POSITION;
}

export class GetPositionSuccessAction implements Action {
    type: string = ActionTypes.GET_POSITION_SUCCESS;

    constructor(public payload: CurrentPosition) {
    }
}

export class GetPositionFailAction implements Action {
    type: string = ActionTypes.GET_POSITION_FAIL;

    constructor(public payload: PositionError) {
    }
}

export type Actions
    = GetPositionSuccessAction
    | GetPositionFailAction;
