import { CalendarDayViewBase } from './CalendarDayView.base';
import { getStyles } from './CalendarDayView.styles';
import { ICalendarDayViewProps } from './CalendarDayView.types';
import { styled } from '../../Utilities';

export { ICalendarDayViewProps };
export const CalendarDayView = styled(CalendarDayViewBase, getStyles);
