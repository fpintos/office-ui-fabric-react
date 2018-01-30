import * as React from 'react';
import { CalendarViewRowHeaders } from '../../CalendarViewRowHeaders';
import { ICalendarViewRowHeaderProps } from '../../CalendarViewRowHeader';

const hours = (Array.apply(null, Array(24)) as object[]).map(
  (_, h) => (h % 12 || 12) + (h < 12 ? "am" : "pm")
);

export class CalendarViewRowHeadersCustomRowHeaderClassExample extends React.Component {
  public render(): JSX.Element {
    return (
      <>
      <p>
        In this example, we override the default CalendarViewRowHeader header type
        with a custom Class Component. The custom component is responsible for
        its own style and rendering.
      </p>
      <p>
        <i>
          This is NOT a typical example.
          A more concrete one would be to create a new styled component using:
        </i>
        <pre>styled(CalendarViewRowHeadersBase, getStyles)</pre>
      </p>
      <CalendarViewRowHeaders rowHeaderType={ CustomRowHeader }>
        { hours }
      </CalendarViewRowHeaders>
      </>
    );
  }
}

class CustomRowHeader extends React.Component<ICalendarViewRowHeaderProps> {
  render() {
    return (
      <button>
        { this.props.children }
      </button>
    );
  }
}

