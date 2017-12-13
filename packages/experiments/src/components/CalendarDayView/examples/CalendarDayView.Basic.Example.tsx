import * as React from 'react';
import { CalendarDayView } from '../../CalendarDayView';

export class CalendarDayViewBasicExample extends React.Component {
  public render(): JSX.Element {
    return (
      <CalendarDayView
        day={ new Date(2018, 0, 1) }
      />
    );
  }
}
