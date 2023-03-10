import { createReducer, on } from "@ngrx/store";
import { data } from "src/app/services/data.interface";
import { addDataAction } from "../actions/input-data.action";


export const initialState: data[] = [];

export const addDataReducer = createReducer(
    initialState,
    on(addDataAction, (state, action) => {
        const uniqueName: data = {
            id: action.id,
            name: action.name,
            frequency: action.frequency,
            timeStamp: action.timeStamp,
        }
        const entriesClone: data[] = JSON.parse(JSON.stringify(state));
        entriesClone.push(uniqueName);
        return entriesClone
    }
    )
)