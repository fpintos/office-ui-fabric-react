import * as React from 'react';
import { CalendarViewRowHeaders, ICalendarViewRowHeadersStyleProps, ICalendarViewRowHeadersStyles } from '../../CalendarViewRowHeaders';

const hours = (Array.apply(null, Array(24)) as object[]).map(
  (_, h) => (h % 12 || 12) + (h < 12 ? "am" : "pm")
);

export class CalendarViewRowHeadersStyledExample extends React.Component {
  public render(): JSX.Element {
    return (
      <>
      <p>
        In this example, the style of the container and of the individual headers
          are changed by a custom getStyles function.
      </p>
      <CalendarViewRowHeaders getStyles={ getCustomStyle }>
        { hours }
      </CalendarViewRowHeaders>
      </>
    );
  }
}

function getCustomStyle(styleProps: ICalendarViewRowHeadersStyleProps): Partial<ICalendarViewRowHeadersStyles> {
  return ({
    root: {
      backgroundColor: styleProps.theme.palette.themeLighter,
      paddingTop: 5,
      paddingLeft: 5,
      paddingRight: 5,
    },
    rowHeader: {
      backgroundColor: styleProps.theme.palette.themeLight,
      marginBottom: 5,
      height: 30
    }
  });
}