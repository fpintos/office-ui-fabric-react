import { ICalendarViewRowHeaderStyleProps } from './CalendarViewRowHeader.types';
import { ICalendarViewRowHeaderStyles } from './CalendarViewRowHeader.types';

export function getStyles(styleProps: ICalendarViewRowHeaderStyleProps): ICalendarViewRowHeaderStyles {
  return {
    root: [
      'ms-CalendarViewRowHeader',
      {
        //borderStyle: 'solid',
      },
      styleProps.className
    ],
  };
}
