import * as React from 'react';
import { autobind, BaseComponent, classNamesFunction, customizable } from '../../Utilities';
import { ICalendarMonthView } from './CalendarMonthView.types';
import { ICalendarMonthViewProps } from './CalendarMonthView.types';
import { ICalendarMonthViewStyleProps } from './CalendarMonthView.types';
import { ICalendarMonthViewStyles } from './CalendarMonthView.types';
import { CalendarView, ICalendarView } from '../CalendarView';

import {
  // addDays,
  // addWeeks,
  // addMonths,
  getWeekNumber,
  //getWeekNumbersInMonth,
  getMonthStart,
  getMonthEnd
} from 'office-ui-fabric-react/lib/utilities/dateMath/DateMath';

const getClassNames = classNamesFunction<ICalendarMonthViewStyleProps, ICalendarMonthViewStyles>();

@customizable('CalendarMonthView', ['theme'])
export class CalendarMonthViewBase extends BaseComponent<ICalendarMonthViewProps> implements ICalendarMonthView {
  public static defaultProps: Partial<ICalendarMonthViewProps> = {
  };

  private calendarView: ICalendarView;

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    const { month, firstDayOfWeek, firstWeekOfYear } = this.props;

    const monthStart = getMonthStart(month);
    const monthEnd = getMonthEnd(month);
    const startingWeek = getWeekNumber(monthStart, firstDayOfWeek, firstWeekOfYear);
    const endingWeek = getWeekNumber(monthEnd, firstDayOfWeek, firstWeekOfYear);

    const columnHeaders = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    const rowHeaders = [];
    for (let i = startingWeek; i <= endingWeek; i++) {
      rowHeaders.push('Week ' + i);
    }

    return (
      <CalendarView
        componentRef={ this._setCalendarView }
        className={ classNames.root }
        columnHeaders={ columnHeaders }
        rowHeaders={ rowHeaders } />
    );
  }

  public focus(): void {
    this.calendarView.focus();
  }

  @autobind
  private _setCalendarView(component: ICalendarView): void {
    this.calendarView = component;
  }
}
