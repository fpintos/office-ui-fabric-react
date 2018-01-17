import * as React from 'react';
import { CalendarViewRowHeaders } from '../../CalendarViewRowHeaders';

const hours = (Array.apply(null, Array(24)) as object[]).map(
  (_, h) => (h % 12 || 12) + (h < 12 ? "am" : "pm")
);

export class CalendarViewRowHeadersCustomRowHeaderPropsExample extends React.Component {
  public render(): React.ReactNode {
    return (
      <>
      <p>
        In this example, properties of all individual row headers are set
        with a template that is part of CalendarViewRowHeaders properties.
      </p>
      <CalendarViewRowHeaders headerProps={ { height: 30 } }>
        { hours }
      </CalendarViewRowHeaders>
      </>
    );
  }
}
