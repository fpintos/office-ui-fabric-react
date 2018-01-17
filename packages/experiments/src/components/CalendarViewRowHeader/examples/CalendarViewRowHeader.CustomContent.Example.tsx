import * as React from 'react';
import { CalendarViewRowHeader } from '../../CalendarViewRowHeader';

export class CalendarViewRowHeaderCustomContentExample extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <CalendarViewRowHeader>
          <button>Hello</button>
        </CalendarViewRowHeader>
      </div>
    );
  }
}
