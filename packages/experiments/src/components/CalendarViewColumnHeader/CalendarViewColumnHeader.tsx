import { CalendarViewColumnHeaderBase } from './CalendarViewColumnHeader.base';
import { getStyles } from './CalendarViewColumnHeader.styles';
import { ICalendarViewColumnHeaderProps } from './CalendarViewColumnHeader.types';
import { styled } from 'office-ui-fabric-react/lib/Utilities';

export { ICalendarViewColumnHeaderProps };
export const CalendarViewColumnHeader = styled(CalendarViewColumnHeaderBase, getStyles);
