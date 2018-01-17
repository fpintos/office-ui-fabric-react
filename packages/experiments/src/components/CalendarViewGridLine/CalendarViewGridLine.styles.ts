import { ICalendarViewGridLineStyleProps } from './CalendarViewGridLine.types';
import { ICalendarViewGridLineStyles } from './CalendarViewGridLine.types';

export function getStyles(styleProps: ICalendarViewGridLineStyleProps): ICalendarViewGridLineStyles {
  return {
    root: [
      'ms-CalendarViewGridLine',
      {
        borderStyle: 'solid',
      },
      styleProps.className
    ],
  };
}
