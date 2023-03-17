import { createAction, props } from "@ngrx/store"

export const EDITDATA = '[EDITDATA] Edit data'

export const editDataAction = createAction(
    EDITDATA,
    props<{
        id: string;
        name: string;
        frequency: string;
        timeStamp: string
    }>()
)