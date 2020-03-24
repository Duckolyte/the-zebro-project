import {Action} from '@ngrx/store';
import {SelectionContext} from '../model/common/selection-context';

export enum SelectionContextActionTypes {
  CREATE_CONTEXT = '[Selection Context] Create',
  UPDATE_CONTEXT = '[Selection Context] Update',
  DELETE_CONTEXT = '[Selection Context] Delete'
}

export class CreateSelectionContext implements Action {
  readonly type = SelectionContextActionTypes.CREATE_CONTEXT;
  constructor(public context: SelectionContext) {}
}

export class UpdateSelectionContext implements Action {
  readonly type = SelectionContextActionTypes.UPDATE_CONTEXT;
  constructor(
    public id: string,
    public changes: Partial<SelectionContext>
  ) {}
}

export class DeleteSelectionContext implements Action {
  readonly type = SelectionContextActionTypes.DELETE_CONTEXT;
  constructor(public id: string) {}
}

export type SelectionContextActions =
  CreateSelectionContext |
  UpdateSelectionContext |
  DeleteSelectionContext;
