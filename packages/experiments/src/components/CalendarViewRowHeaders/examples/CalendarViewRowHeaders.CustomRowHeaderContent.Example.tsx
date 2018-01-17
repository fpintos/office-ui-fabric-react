import * as React from 'react';
import { CalendarViewRowHeaders } from '../../CalendarViewRowHeaders';

const hours = (Array.apply(null, Array(24)) as object[]).map(
  (_, h) => (h % 12 || 12) + (h < 12 ? "am" : "pm")
);

export class CalendarViewRowHeadersCustomRowHeaderContentExample extends React.Component {
  public render(): JSX.Element {
    const headers = hours.map(h => <button>{ h }</button>);

    return (
      <>
      <p>
        In this example, the contents of the headers are custom nodes,
        while using the default CalendarViewRowHeader class and styles.
      </p>
      <CalendarViewRowHeaders>
        { headers }
      </CalendarViewRowHeaders>
      </>
    );
  }
}
