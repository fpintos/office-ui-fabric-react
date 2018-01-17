import { ICalendarViewColumnHeaderStyleProps } from './CalendarViewColumnHeader.types';
import { ICalendarViewColumnHeaderStyles } from './CalendarViewColumnHeader.types';

export function getStyles(styleProps: ICalendarViewColumnHeaderStyleProps): ICalendarViewColumnHeaderStyles {
  return {
    root: [
      'ms-CalendarViewColumnHeader',
      {
        //borderStyle: 'solid',
      },
      styleProps.className
    ],
  };
}
