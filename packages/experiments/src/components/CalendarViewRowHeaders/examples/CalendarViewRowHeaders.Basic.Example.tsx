import * as React from 'react';
import { CalendarViewRowHeaders } from '../../CalendarViewRowHeaders';

export class CalendarViewRowHeadersBasicExample extends React.Component {
  public render(): JSX.Element {
    const headers = ["12am"];
    for (let i = 1; i <= 11; i++) {
      headers.push(i.toString(10) + "am");
    }
    headers.push("12pm");
    for (let i = 1; i <= 11; i++) {
      headers.push(i.toString(10) + "pm");
    }

    return (
      <CalendarViewRowHeaders headers={ headers } />
    );
  }
}
