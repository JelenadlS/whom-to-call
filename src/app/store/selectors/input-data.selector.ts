import { createFeatureSelector, createSelector } from "@ngrx/store";
import { data } from "src/app/services/data.interface";


export const dataSelector = createSelector(
    createFeatureSelector('storeData'),
    (data: data[]) => data
);