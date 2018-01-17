import * as React from 'react';
import { CalendarViewColumnHeaders } from '../../CalendarViewColumnHeaders';

export class CalendarViewColumnHeadersBasicExample extends React.Component {
  public render(): JSX.Element {
    return (
      <CalendarViewColumnHeaders headers={ [
        "1 Sunday",
        "2 Monday",
        "3 Tuesday",
        "4 Wednesday",
        "5 Thursday",
        "6 Friday",
        "7 Saturday"
      ] } />
    );
  }
}
