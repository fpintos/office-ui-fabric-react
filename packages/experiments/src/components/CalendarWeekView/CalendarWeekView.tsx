import * as React from 'react';
//import * as styles from './CalendarWeekView.scss';
import { ICalendarWeekViewProps } from './CalendarWeekView.types';

export class CalendarWeekView extends React.Component<ICalendarWeekViewProps> {
  public static defaultProps: Partial<ICalendarWeekViewProps> = {
    numberOfDays: 7
  };

  public render(): JSX.Element {
    const { firstDay, numberOfDays } = this.props;
    return (
      <div>
        <div>firstDay={ firstDay.toDateString() }</div>
        <div>numberOfDays={ numberOfDays!.toString() }</div>
      </div>
    );
  }
}
