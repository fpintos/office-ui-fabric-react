import * as React from 'react';
import { CalendarMonthView, DayOfWeek, FirstWeekOfYear } from '../../CalendarMonthView';

export class CalendarMonthViewBasicExample extends React.Component {
  public render(): JSX.Element {
    return (
      <CalendarMonthView
        firstDayOfWeek={ DayOfWeek.Sunday }
        firstWeekOfYear={ FirstWeekOfYear.FirstDay }
        month={ new Date(2018, 0) }
      />
    );
  }
}
