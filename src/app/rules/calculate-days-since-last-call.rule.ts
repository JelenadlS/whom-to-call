import { convertStringDateToIsoFormatRule } from "./convert-string-date-to-iso-format.rule";

export const calculateDaysSinceLastCallRuleImplementation = (
    nextTimeToCall: string
): number  => {
    const today = new Date()

    const nextCallDate: Date = new Date(
        convertStringDateToIsoFormatRule(nextTimeToCall)
      )

    const timeInMiliSec = today.getTime() - nextCallDate.getTime();
    const daysTillNextCall = Math.ceil(timeInMiliSec/ (1000 * 3600 * 24)) - 1;

    return daysTillNextCall
}
export const calculateDaysSinceLastCallRule = (
    nextTimeToCall: string
    ) => calculateDaysSinceLastCallRuleImplementation (
        nextTimeToCall
    );