import { CalendarViewBase } from './CalendarView.base';
import { getStyles } from './CalendarView.styles';
import { ICalendarViewProps } from './CalendarView.types';
import { styled } from 'office-ui-fabric-react/lib/Utilities';

export { ICalendarViewProps };
export const CalendarView = styled(CalendarViewBase, getStyles);
