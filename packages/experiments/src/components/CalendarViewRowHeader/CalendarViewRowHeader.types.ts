import { ReactNode } from 'react';
import { IBaseProps } from 'office-ui-fabric-react/lib/Utilities';
import { IThemingProps, IThemingStyleProps, IThemingStyles } from '../Theming';

/** Properties of CalendarViewRowHeader */
export interface ICalendarViewRowHeaderProps extends
  IBaseProps,
  IThemingProps<ICalendarViewRowHeaderStyleProps, ICalendarViewRowHeaderStyles> {
  /**
   * Height of the row header in pixels.
   * Defaults to 60 px.
   */
  height?: number,

  /**
   * Contents of the row header. Rendered as-is.
   */
  children?: ReactNode
}

/** Properties used to define the styles of CalendarViewRowHeader */
export interface ICalendarViewRowHeaderStyleProps extends IThemingStyleProps {
  height: number;
}

/** Styles of CalendarViewRowHeader */
export type ICalendarViewRowHeaderStyles = IThemingStyles;
