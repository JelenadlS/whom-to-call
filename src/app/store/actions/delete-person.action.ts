import { createAction, props } from "@ngrx/store"

export const DELETEPERSON = '[DELETEPERSON] Delete person'

export const deletePersonAction = createAction(
    DELETEPERSON,
    props<{id: string,}>()
)