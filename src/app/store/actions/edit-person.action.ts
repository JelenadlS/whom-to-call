import { createAction, props } from "@ngrx/store"

export const EDITPERSON = '[EDITPERSON] Edit person'

export const editPersonAction = createAction(
    EDITPERSON,
    props<{
        id: string,
        name: string,
        frequency: string,
        timeStamp: string
    }>()
)