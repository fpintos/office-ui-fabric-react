import * as React from 'react';
import { autobind, BaseComponent, classNamesFunction, customizable } from '../../Utilities';
import { ICalendarDayView } from './CalendarDayView.types';
import { ICalendarDayViewProps } from './CalendarDayView.types';
import { ICalendarDayViewStyleProps } from './CalendarDayView.types';
import { ICalendarDayViewStyles } from './CalendarDayView.types';
import { CalendarView, ICalendarView } from '../CalendarView';

const getClassNames = classNamesFunction<ICalendarDayViewStyleProps, ICalendarDayViewStyles>();

@customizable('CalendarDayView', ['theme'])
export class CalendarDayViewBase extends BaseComponent<ICalendarDayViewProps> implements ICalendarDayView {
  public static defaultProps: Partial<ICalendarDayViewProps> = {
  };

  private calendarView: ICalendarView;

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    const { day } = this.props;
    const columnHeaders = [day.toLocaleDateString()];

    return (
      <CalendarView
        componentRef={ this._setCalendarView }
        className={ classNames.root }
        columnHeaders={ columnHeaders } />
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
