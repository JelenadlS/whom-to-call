import { createReducer, on } from "@ngrx/store";
import { Person } from "src/app/services/person.interface";
import { deletePersonAction } from "../actions/delete-person.action";
import { editPersonAction } from "../actions/edit-person.action";
import { addPersonAction } from "../actions/add-person.action";
import { calculateDueDateRule } from "src/app/rules/calculate-due-date.rule";


export const initialState: Person[] = [];

export const createAndUpdatePersonReducer = createReducer(
    initialState,
    on(addPersonAction, (state, action) => {
        const uniqueName: Person = {
            id: action.id,
            name: action.name,
            frequency: action.frequency,
            lastTimeCalled: action.lastTimeCalled,
            nextTimeToCall: calculateDueDateRule(action),
        }
        const entriesClone: Person[] = JSON.parse(JSON.stringify(state));
        entriesClone.push(uniqueName);
        return entriesClone
    }
    ),
    on(deletePersonAction, (state, action) => {
        const id: string = action.id
        const entriesClone: Person[] = JSON.parse(JSON.stringify(state));
        const found: Person | undefined = entriesClone.find((data: Person) => data.id === id);

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
        const entriesClone: Person[] = JSON.parse(JSON.stringify(state));

           entriesClone.map((data: Person) => {
               if(data.id === action.id){
                data.frequency = action.frequency;
                data.lastTimeCalled = action.lastTimeCalled;
                data.nextTimeToCall = calculateDueDateRule(action);
               }
           });
            
        return entriesClone
    }
    )
)