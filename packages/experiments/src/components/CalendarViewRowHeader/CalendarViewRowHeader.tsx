import { CalendarViewRowHeaderBase } from './CalendarViewRowHeader.base';
import { getStyles } from './CalendarViewRowHeader.styles';
import { ICalendarViewRowHeaderProps } from './CalendarViewRowHeader.types';
import { styled } from 'office-ui-fabric-react/lib/Utilities';

export { ICalendarViewRowHeaderProps };
export const CalendarViewRowHeader = styled(CalendarViewRowHeaderBase, getStyles);
