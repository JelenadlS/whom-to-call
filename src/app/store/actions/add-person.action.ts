import { createAction, props } from "@ngrx/store"

export const ADDPERSON = '[ADDPERSON] Add person'

export const addPersonAction = createAction(
    ADDPERSON,
    props<{
        id: string,
        name: string, 
        frequency: string, 
        lastTimeCalled: string,
        nextTimeToCall: string,
    }>()
)