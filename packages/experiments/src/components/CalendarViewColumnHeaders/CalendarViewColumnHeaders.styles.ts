import { ICalendarViewColumnHeadersStyleProps } from './CalendarViewColumnHeaders.types';
import { ICalendarViewColumnHeadersStyles } from './CalendarViewColumnHeaders.types';

export function getStyles(styleProps: ICalendarViewColumnHeadersStyleProps): ICalendarViewColumnHeadersStyles {
  return {
    root: [
      'ms-CalendarViewColumnHeaders',
      {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      styleProps.className
    ],
  };
}
