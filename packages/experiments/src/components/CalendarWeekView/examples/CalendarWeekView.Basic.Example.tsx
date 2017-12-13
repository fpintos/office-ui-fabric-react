import * as React from 'react';
import { CalendarWeekView } from '../../CalendarWeekView';

export class CalendarWeekViewBasicExample extends React.Component {
  public render(): JSX.Element {
    return (
      <CalendarWeekView
        firstDay={ new Date(2017, 11, 31) }
      />
    );
  }
}
