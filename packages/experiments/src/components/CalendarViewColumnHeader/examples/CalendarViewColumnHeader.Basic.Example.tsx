import * as React from 'react';
import { CalendarViewColumnHeader } from '../../CalendarViewColumnHeader';

export class CalendarViewColumnHeaderBasicExample extends React.Component {
  public render(): JSX.Element {
    return (
      <CalendarViewColumnHeader>
        Jan 1st
      </CalendarViewColumnHeader>
    );
  }
}
