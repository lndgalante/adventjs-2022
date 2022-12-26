// 2 extra work hours per missing a working day of the same year due to holiday
// worry only about holidays that are from monday to friday

function countHours(year: number, holidays: string[]) {
  const weekDaysNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const holydaysDaysNames = holidays.map((holiday) => {
    const date = new Date(`${year}-${holiday}`);
    return date.toLocaleDateString('en', { weekday: 'long' });
  });

  const workingHolidays = holydaysDaysNames.filter((day) => weekDaysNames.includes(day));
  const totalHours = workingHolidays.length * 2;

  return totalHours;
}

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

countHours(2022, ['01/06', '04/01', '12/25']); //?
// 2 days -> 4 extra hours in the year
