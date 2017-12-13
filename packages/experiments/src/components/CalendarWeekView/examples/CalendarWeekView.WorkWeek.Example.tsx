import * as React from 'react';
import { CalendarWeekView } from '../../CalendarWeekView';

export class CalendarWeekViewWorkWeekExample extends React.Component {
  public render(): JSX.Element {
    return (
      <CalendarWeekView
        firstDay={ new Date(2018, 0, 1) }
        numberOfDays={ 5 }
      />
    );
  }
}
