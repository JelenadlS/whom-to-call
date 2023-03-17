import { createReducer, on } from "@ngrx/store";
import { data } from "src/app/services/data.interface";
import { deleteDataAction } from "../actions/delete.action";
import { editDataAction } from "../actions/edit.action";
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
    ),
    on(deleteDataAction, (state, action) => {
        const id: string = action.id
        const entriesClone: data[] = JSON.parse(JSON.stringify(state));
        const found: data | undefined = entriesClone.find((data: data) => data.id === id);

        if (found === undefined){
            entriesClone
        }
      
        if (found) {
            const index = entriesClone.indexOf(found, 0);
            entriesClone.splice(index, 1)
        }
 
        return entriesClone
    }
    ),
    on(editDataAction, (state, action) => {
        const entriesClone: data[] = JSON.parse(JSON.stringify(state));

           entriesClone.map((data: data) => {
               if(data.id === action.id){
                data.frequency = action.frequency;
                data.timeStamp = action.timeStamp;
               }
           });
            
        return entriesClone
    }
    )
)