import { CalendarMonthViewBase } from './CalendarMonthView.base';
import { getStyles } from './CalendarMonthView.styles';
import { ICalendarMonthViewProps } from './CalendarMonthView.types';
import { styled } from '../../Utilities';

export { ICalendarMonthViewProps };
export const CalendarMonthView = styled(CalendarMonthViewBase, getStyles);
