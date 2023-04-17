import { createReducer, on } from "@ngrx/store";
import { data } from "src/app/services/data.interface";
import { deletePersonAction } from "../actions/delete-person.action";
import { editPersonAction } from "../actions/edit-person.action";
import { addPersonAction } from "../actions/add-person.action";
import { calculateDueDateRule } from "src/app/rules/calculate-due-date.rule";


export const initialState: data[] = [];

export const createAndUpdatePersonReducer = createReducer(
    initialState,
    on(addPersonAction, (state, action) => {
        const uniqueName: data = {
            id: action.id,
            name: action.name,
            frequency: action.frequency,
            timeStamp: action.timeStamp,
            dueDate: calculateDueDateRule(action),
        }
        const entriesClone: data[] = JSON.parse(JSON.stringify(state));
        entriesClone.push(uniqueName);
        return entriesClone
    }
    ),
    on(deletePersonAction, (state, action) => {
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
    on(editPersonAction, (state, action) => {
        const entriesClone: data[] = JSON.parse(JSON.stringify(state));

           entriesClone.map((data: data) => {
               if(data.id === action.id){
                data.frequency = action.frequency;
                data.timeStamp = action.timeStamp;
                data.dueDate = calculateDueDateRule(action);
               }
           });
            
        return entriesClone
    }
    )
)