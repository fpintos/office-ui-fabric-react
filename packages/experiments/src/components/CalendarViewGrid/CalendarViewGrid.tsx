import { CalendarViewGridBase } from './CalendarViewGrid.base';
import { getStyles } from './CalendarViewGrid.styles';
import { ICalendarViewGridProps } from './CalendarViewGrid.types';
import { styled } from 'office-ui-fabric-react/lib/Utilities';

export { ICalendarViewGridProps };
export const CalendarViewGrid = styled(CalendarViewGridBase, getStyles);
