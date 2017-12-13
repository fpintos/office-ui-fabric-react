import * as React from 'react';
import { CalendarWeekView } from '../../CalendarWeekView';

export class CalendarWeekViewBasicExample extends React.Component {
  public static title = "1st 7-day week of 2018, starting Sunday Dec 31st 2017";
  public static code = require<string>('!raw-loader!./CalendarWeekView.Basic.Example');

  public render(): JSX.Element {
    return (
      <CalendarWeekView
        firstDay={ new Date(2017, 11, 31) }
      />
    );
  }
}
