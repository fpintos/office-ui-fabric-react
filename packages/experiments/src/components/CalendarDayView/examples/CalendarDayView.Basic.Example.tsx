import * as React from 'react';
import { CalendarDayView } from '../../CalendarDayView';

export class CalendarDayViewBasicExample extends React.Component {
  public static title = "Day view of Jan 1st, 2018";
  public static code = require<string>('!raw-loader!./CalendarDayView.Basic.Example');

  public render(): JSX.Element {
    return (
      <CalendarDayView
        day={ new Date(2018, 0, 1) }
      />
    );
  }
}
