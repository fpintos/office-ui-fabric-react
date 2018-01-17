import { ICalendarViewStyleProps } from './CalendarView.types';
import { ICalendarViewStyles } from './CalendarView.types';
import { getRTL } from '../../Utilities';

export function getStyles(styleProps: ICalendarViewStyleProps): ICalendarViewStyles {
  return {
    root: [
      'ms-CalendarView',
      {
        borderColor: styleProps.theme.semanticColors.bodyDivider,
        borderWidth: '1px',
        borderStyle: 'solid',
      },
      styleProps.className
    ],
    columnHeaders: [
      getRTL() ? { paddingRight: styleProps.rowHeaderWidth } : { paddingLeft: styleProps.rowHeaderWidth },
      {
        borderBottomColor: styleProps.theme.semanticColors.bodyDivider,
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
      }
    ],
    rowHeaders: [
      {
        width: styleProps.rowHeaderWidth,
        borderRightColor: styleProps.theme.semanticColors.bodyDivider,
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
      }
    ],
    gridLines: [],
    grid: []
  };
}
