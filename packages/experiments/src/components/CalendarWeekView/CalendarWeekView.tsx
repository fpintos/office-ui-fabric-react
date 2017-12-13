import { CalendarWeekViewBase } from './CalendarWeekView.base';
import { getStyles } from './CalendarWeekView.styles';
import { ICalendarWeekViewProps } from './CalendarWeekView.types';
import { styled } from '../../Utilities';

export { ICalendarWeekViewProps };
export const CalendarWeekView = styled(CalendarWeekViewBase, getStyles);
