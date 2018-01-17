import { CalendarViewRowHeadersBase } from './CalendarViewRowHeaders.base';
import { getStyles } from './CalendarViewRowHeaders.styles';
import { ICalendarViewRowHeadersProps } from './CalendarViewRowHeaders.types';
import { styled } from 'office-ui-fabric-react/lib/Utilities';

export { ICalendarViewRowHeadersProps };
export const CalendarViewRowHeaders = styled(CalendarViewRowHeadersBase, getStyles);
