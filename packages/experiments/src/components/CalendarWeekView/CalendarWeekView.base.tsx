import * as React from 'react';
import { autobind, BaseComponent, classNamesFunction, customizable } from '../../Utilities';
import { ICalendarWeekView } from './CalendarWeekView.types';
import { ICalendarWeekViewProps } from './CalendarWeekView.types';
import { ICalendarWeekViewStyleProps } from './CalendarWeekView.types';
import { ICalendarWeekViewStyles } from './CalendarWeekView.types';
import { CalendarView } from '../CalendarView';
import { addDays } from 'office-ui-fabric-react/lib/utilities/dateMath/DateMath';
import { ICalendarView } from 'src/CalendarView';

const getClassNames = classNamesFunction<ICalendarWeekViewStyleProps, ICalendarWeekViewStyles>();

@customizable('CalendarWeekView', ['theme'])
export class CalendarWeekViewBase extends BaseComponent<ICalendarWeekViewProps> implements ICalendarWeekView {
  public static defaultProps: Partial<ICalendarWeekViewProps> = {
    numberOfDays: 7
  };

  private calendarView: ICalendarView;

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    const { firstDay, numberOfDays } = this.props;
    const columnHeaders = [];
    for (let i = 0, day = firstDay; i < numberOfDays!; i++ , day = addDays(firstDay, 1)) {
      columnHeaders.push(day.toLocaleDateString())
    }

    return (
      <CalendarView
        componentRef={ this._setCalendarView }
        className={ classNames.root } columnHeaders={ columnHeaders } />
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
