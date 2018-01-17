import * as React from 'react';
import { CalendarView } from '../../CalendarView';

export class CalendarViewBasicExample extends React.Component {
  public render(): JSX.Element {
    return (
      <CalendarView columnHeaders={ [
        "Day 1",
        "Day 2",
        "Day 3"
      ] } />
    );
  }
}
