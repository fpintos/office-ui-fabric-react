import { ICalendarWeekViewStyleProps } from './CalendarWeekView.types';
import { ICalendarWeekViewStyles } from './CalendarWeekView.types';

export function getStyles(styleProps: ICalendarWeekViewStyleProps): ICalendarWeekViewStyles {
  return {
    root: [
      'ms-CalendarWeekView',
      {
        borderStyle: 'solid',
        backgroundColor: styleProps.theme.semanticColors.bodyBackground,
      },
      styleProps.className
    ],
  };
}
