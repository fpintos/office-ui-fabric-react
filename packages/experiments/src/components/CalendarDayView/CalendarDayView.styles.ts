import { ICalendarDayViewStyleProps } from './CalendarDayView.types';
import { ICalendarDayViewStyles } from './CalendarDayView.types';

export function getStyles(styleProps: ICalendarDayViewStyleProps): ICalendarDayViewStyles {
  return {
    root: [
      'ms-CalendarDayView',
      {
        borderStyle: 'solid',
        backgroundColor: styleProps.theme.semanticColors.bodyBackground,
      },
      styleProps.className
    ],
  };
}
