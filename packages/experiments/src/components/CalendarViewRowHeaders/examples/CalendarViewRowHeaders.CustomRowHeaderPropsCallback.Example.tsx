import * as React from 'react';
import { CalendarViewRowHeaders } from '../../CalendarViewRowHeaders';
import { ICalendarViewRowHeaderProps } from '../../CalendarViewRowHeader';

const hours = (Array.apply(null, Array(24)) as object[]).map(
  (_, h) => (h % 12 || 12) + (h < 12 ? "am" : "pm")
);

export class CalendarViewRowHeadersCustomRowHeaderPropsCallbackExample extends React.Component {
  public render(): React.ReactNode {
    return (
      <>
      <p>
        In this example, properties of individual row headers are set
        with a callback that is part of CalendarViewRowHeaders properties.
      </p>
      <CalendarViewRowHeaders getHeaderProps={ getHeaderProps }>
        { hours }
      </CalendarViewRowHeaders>
      </>
    );
  }
}

function getHeaderProps(header: React.ReactNode, index: number): ICalendarViewRowHeaderProps {
  return {
    className: "rowHeader" + index,
    getStyles: styleProps => {
      return {
        root: {
          height: 20,
          fontWeight: index % 2 ? 'bold' : 'normal',
        }
      }
    }
  }
}
