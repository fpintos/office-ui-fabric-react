import { ReactNode } from 'react';
import { IBaseProps } from 'office-ui-fabric-react/lib/Utilities';
import { IThemingProps, IThemingStyleProps, IThemingStyles } from '../Theming';

/** Properties of CalendarViewColumnHeader */
export interface ICalendarViewColumnHeaderProps extends
  IBaseProps,
  IThemingProps<ICalendarViewColumnHeaderStyleProps, ICalendarViewColumnHeaderStyles> {
  /**
   * Contents of the column header. Rendered as-is.
   */
  children?: ReactNode
}

/** Properties used to define the styles of CalendarViewColumnHeader */
export type ICalendarViewColumnHeaderStyleProps = IThemingStyleProps;

/** Styles of CalendarViewColumnHeader */
export type ICalendarViewColumnHeaderStyles = IThemingStyles;
