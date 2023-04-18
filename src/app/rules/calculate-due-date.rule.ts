import { Person } from "../services/person.interface";
import { convertNewDateToStringDateRule } from "./convert-new-date-to-string-date.rule";
import { convertStringDateToIsoFormatRule } from "./convert-string-date-to-iso-format.rule";

export const calculateDueDateRuleImplementation = (
    personToCall: Person 
): string  => {
    const date = new Date(convertStringDateToIsoFormatRule(personToCall.lastTimeCalled))
  
    date.setDate(date.getDate() + Number(personToCall.frequency))

    return convertNewDateToStringDateRule(date)
}
export const calculateDueDateRule = (
    personToCall: Person
    ) => calculateDueDateRuleImplementation (
        personToCall
    );