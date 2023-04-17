import { data } from "../services/data.interface";
import { convertNewDateToStringDateRule } from "./convert-new-date-to-string-date.rule";
import { convertStringDateToIsoFormatRule } from "./convert-string-date-to-iso-format.rule";

export const calculateDueDateRuleImplementation = (
    personToCall: data 
): string  => {
    const date = new Date(convertStringDateToIsoFormatRule(personToCall.timeStamp))
  
    date.setDate(date.getDate() + Number(personToCall.frequency))

    return convertNewDateToStringDateRule(date)
}
export const calculateDueDateRule = (
    personToCall: data
    ) => calculateDueDateRuleImplementation (
        personToCall
    );