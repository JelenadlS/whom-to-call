import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Person } from "src/app/services/person.interface";


export const fullListOfPeopleSelector = createSelector(
    createFeatureSelector('fullListOfPeople'),
    (fullListOfPeople: Person[]) => fullListOfPeople
);