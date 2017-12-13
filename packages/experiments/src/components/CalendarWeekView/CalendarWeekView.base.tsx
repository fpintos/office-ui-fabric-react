import * as React from 'react';
import { classNamesFunction } from '../../Utilities';
import { customizable } from '../../Utilities';
import { ICalendarWeekViewProps } from './CalendarWeekView.types';
import { ICalendarWeekViewStyleProps } from './CalendarWeekView.types';
import { ICalendarWeekViewStyles } from './CalendarWeekView.types';

const getClassNames = classNamesFunction<ICalendarWeekViewStyleProps, ICalendarWeekViewStyles>();

@customizable('CalendarWeekView', ['theme'])
export class CalendarWeekViewBase extends React.Component<ICalendarWeekViewProps> {
  public static defaultProps: Partial<ICalendarWeekViewProps> = {
    numberOfDays: 7
  };

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    const { firstDay, numberOfDays } = this.props;

    return (
      <div className={ classNames.root }>
        <div>firstDay={ firstDay.toDateString() }</div>
        <div>numberOfDays={ numberOfDays!.toString() }</div>
      </div>
    );
  }
}
