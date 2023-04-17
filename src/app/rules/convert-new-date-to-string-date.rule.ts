export const convertNewDateToStringDateRuleImplementation = (
    date: Date
): string => {
    const today = date;
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
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
    
    const formattedToday = dayToString + '.' + monthToString + '.' + year;

    return formattedToday
}

export const convertNewDateToStringDateRule = (
    date: Date
    ) => convertNewDateToStringDateRuleImplementation (
        date
    );