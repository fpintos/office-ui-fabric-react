import * as React from 'react';
import { CalendarMonthView } from '../../CalendarMonthView';

export class CalendarMonthViewBasicExample extends React.Component {
  public static title = "Month view of January, 2018";
  public static code = require<string>('!raw-loader!./CalendarMonthView.Basic.Example');

  public render(): JSX.Element {
    return (
      <CalendarMonthView
        month={ new Date(2018, 0) }
      />
    );
  }
}
