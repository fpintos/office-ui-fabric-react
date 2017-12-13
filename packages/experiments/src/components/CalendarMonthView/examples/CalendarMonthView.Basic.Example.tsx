import * as React from 'react';
import { CalendarMonthView } from '../../CalendarMonthView';

export class CalendarMonthViewBasicExample extends React.Component {
  public render(): JSX.Element {
    return (
      <CalendarMonthView
        month={ new Date(2018, 0) }
      />
    );
  }
}
