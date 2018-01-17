import { ICalendarViewGridLinesStyleProps } from './CalendarViewGridLines.types';
import { ICalendarViewGridLinesStyles } from './CalendarViewGridLines.types';

export function getStyles(styleProps: ICalendarViewGridLinesStyleProps): ICalendarViewGridLinesStyles {
  return {
    root: [
      'ms-CalendarViewGridLines',
      {
        borderStyle: 'solid',
      },
      styleProps.className
    ],
  };
}
