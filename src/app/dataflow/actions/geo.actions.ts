import { Action } from '@ngrx/store';
import { Response } from "@angular/http";

export const ActionTypes = {
    GET_POSITION: '[GEO] GET POSITION',
    GET_POSITION_SUCCESS: '[GEO] GET POSITION SUCCESS',
    GET_POSITION_FAIL: '[GEO] GET POSITION FAIL'
};

export class GetPositionAction implements Action {
    type: string = ActionTypes.GET_POSITION;

    constructor(public payload: Position) {
    }
}

export class GetPositionSuccessAction implements Action {
    type: string = ActionTypes.GET_POSITION_SUCCESS;

    constructor(public payload: Position) {
    }
}

export class GetPositionFailAction implements Action {
    type: string = ActionTypes.GET_POSITION_FAIL;

    constructor(public payload: Response) {
    }
}

export type Actions
    = GetPositionSuccessAction
    | GetPositionFailAction;
