import { ICalendarViewRowHeadersStyleProps } from './CalendarViewRowHeaders.types';
import { ICalendarViewRowHeadersStyles } from './CalendarViewRowHeaders.types';

export function getStyles(styleProps: ICalendarViewRowHeadersStyleProps): ICalendarViewRowHeadersStyles {
  return {
    root: [
      'ms-CalendarViewRowHeaders',
      {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      },
      styleProps.className
    ],
  };
}
