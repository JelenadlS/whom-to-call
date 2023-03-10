import { createAction, props } from "@ngrx/store"

export const ADDDATA = '[ADDDATA] Add data'

export const addDataAction = createAction(
    ADDDATA,
    props<{
        id: string,
        name: string, 
        frequency: string, 
        timeStamp: string
    }>()
)