export const convertStringDateToIsoFormatRuleImplementation = (
    date: string
): string => {
    const splitDate = date.split('.');

    const year = splitDate[2];
    let month = Number(splitDate[1]);
    let day = Number(splitDate[0]);
    let monthToString = ''
    let dayToString = ''
    
    if (day < 10) {
      dayToString = '0' + day
    } else {
      dayToString = day.toString()
    };
    if (month < 10) {
      monthToString = '0' + month
    } else {
      monthToString = month.toString()
    }

    const formattedToday = year + '-' + monthToString + '-' + dayToString;
    return formattedToday
}

export const convertStringDateToIsoFormatRule = (
    date: string
    ) => convertStringDateToIsoFormatRuleImplementation (
        date
    );