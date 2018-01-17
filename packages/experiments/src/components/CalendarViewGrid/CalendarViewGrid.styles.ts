import { ICalendarViewGridStyleProps } from './CalendarViewGrid.types';
import { ICalendarViewGridStyles } from './CalendarViewGrid.types';

export function getStyles(styleProps: ICalendarViewGridStyleProps): ICalendarViewGridStyles {
  return {
    root: [
      'ms-CalendarViewGrid',
      {
        borderStyle: 'solid',
      },
      styleProps.className
    ],
  };
}
