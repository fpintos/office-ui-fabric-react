export interface ICalendarWeekViewProps {
  /**
   * The date of the first day to be displayed by the calendar view.
   */
  firstDay: Date;

  /**
   * Number of days to display.
   * @default 7
   */
  numberOfDays?: number;
}
