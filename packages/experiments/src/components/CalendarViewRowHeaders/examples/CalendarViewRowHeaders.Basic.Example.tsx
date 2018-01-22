import * as React from 'react';
import { CalendarViewRowHeaders } from '../../CalendarViewRowHeaders';

const hours = (Array.apply(null, Array(24)) as object[]).map(
  (_, h) => (h % 12 || 12) + (h < 12 ? "am" : "pm")
);

export class CalendarViewRowHeadersBasicExample extends React.Component {
  public render(): React.ReactNode {
    return (
      <>
      <p>
        In this example, we use the default components and styles
        with plain text as the individual header content.
      </p>
      <CalendarViewRowHeaders>
        { hours }
      </CalendarViewRowHeaders>
      </>
    );
  }
}