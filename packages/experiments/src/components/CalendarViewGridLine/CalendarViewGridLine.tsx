import { CalendarViewGridLineBase } from './CalendarViewGridLine.base';
import { getStyles } from './CalendarViewGridLine.styles';
import { ICalendarViewGridLineProps } from './CalendarViewGridLine.types';
import { styled } from 'office-ui-fabric-react/lib/Utilities';

export { ICalendarViewGridLineProps };
export const CalendarViewGridLine = styled(CalendarViewGridLineBase, getStyles);
