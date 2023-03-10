import { createAction, props } from "@ngrx/store"

export const DELETEDATA = '[DELETEDATA] Delete data'

export const deleteDataAction = createAction(
    DELETEDATA,
    props<{id: string,}>()
)