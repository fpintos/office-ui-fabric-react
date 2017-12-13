import { ICalendarMonthViewStyleProps } from './CalendarMonthView.types';
import { ICalendarMonthViewStyles } from './CalendarMonthView.types';

export function getStyles(styleProps: ICalendarMonthViewStyleProps): ICalendarMonthViewStyles {
  return {
    root: [
      'ms-CalendarMonthView',
      {
        borderStyle: 'solid',
        backgroundColor: styleProps.theme.semanticColors.bodyBackground,
      },
      styleProps.className
    ],
  };
}
