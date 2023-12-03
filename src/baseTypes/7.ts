/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekday {
  MONDAY = 1,
  TUESDAY = 1,
  WEDNESDAY = 1,
  THURSDAY = 1,
  FRIDAY = 1,
  SATURDAY = 0,
  SUNDAY = 0,
}

const isWeekend = (day: Weekday): boolean => {
//   якщо робочий день - повертає true, а вихідний - повертає false;
  return Boolean(day === 1);
}