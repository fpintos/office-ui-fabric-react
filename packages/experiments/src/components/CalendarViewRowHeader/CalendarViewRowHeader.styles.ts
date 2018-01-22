import { ICalendarViewRowHeaderStyleProps } from './CalendarViewRowHeader.types';
import { ICalendarViewRowHeaderStyles } from './CalendarViewRowHeader.types';

export function getStyles(styleProps: ICalendarViewRowHeaderStyleProps): ICalendarViewRowHeaderStyles {
  return {
    root: [
      'ms-CalendarViewRowHeader',
      {
        borderTop: "1px solid",
        borderTopColor: styleProps.theme.palette.neutralLight,
        padding: "4px 10px",
        height: styleProps.height,
      },
      styleProps.className
    ],
  };
}
