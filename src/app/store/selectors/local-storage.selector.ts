import { createFeatureSelector, createSelector } from "@ngrx/store";
import { data } from "src/app/services/data.interface";


export const localStorageSelector = createSelector(
    createFeatureSelector('storeData'),
    (fullListOfPersonsToCall: data[]) => fullListOfPersonsToCall
);