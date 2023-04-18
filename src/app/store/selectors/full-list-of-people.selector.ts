import { createFeatureSelector, createSelector } from "@ngrx/store";
import { data } from "src/app/services/data.interface";


export const fullListOfPeopleSelector = createSelector(
    createFeatureSelector('fullListOfPeople'),
    (fullListOfPeople: data[]) => fullListOfPeople
);