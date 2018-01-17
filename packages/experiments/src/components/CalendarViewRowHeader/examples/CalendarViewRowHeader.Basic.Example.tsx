import * as React from 'react';
import { CalendarViewRowHeader } from '../../CalendarViewRowHeader';

export class CalendarViewRowHeaderBasicExample extends React.Component {
  public render(): JSX.Element {
    return (
      <CalendarViewRowHeader content="1am" />
    );
  }
}
