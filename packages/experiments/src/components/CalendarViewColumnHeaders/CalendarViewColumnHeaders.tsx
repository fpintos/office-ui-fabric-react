import { CalendarViewColumnHeadersBase } from './CalendarViewColumnHeaders.base';
import { getStyles } from './CalendarViewColumnHeaders.styles';
import { ICalendarViewColumnHeadersProps } from './CalendarViewColumnHeaders.types';
import { styled } from 'office-ui-fabric-react/lib/Utilities';

export { ICalendarViewColumnHeadersProps };
export const CalendarViewColumnHeaders = styled(CalendarViewColumnHeadersBase, getStyles);
