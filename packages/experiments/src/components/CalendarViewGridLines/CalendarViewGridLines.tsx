import { CalendarViewGridLinesBase } from './CalendarViewGridLines.base';
import { getStyles } from './CalendarViewGridLines.styles';
import { ICalendarViewGridLinesProps } from './CalendarViewGridLines.types';
import { styled } from 'office-ui-fabric-react/lib/Utilities';

export { ICalendarViewGridLinesProps };
export const CalendarViewGridLines = styled(CalendarViewGridLinesBase, getStyles);
