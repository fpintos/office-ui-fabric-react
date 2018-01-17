import * as React from 'react';
import { CalendarViewRowHeader } from '../../CalendarViewRowHeader';

export class CalendarViewRowHeaderBasicExample extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <CalendarViewRowHeader>
          1am
        </CalendarViewRowHeader>
      </div>
    );
  }
}
