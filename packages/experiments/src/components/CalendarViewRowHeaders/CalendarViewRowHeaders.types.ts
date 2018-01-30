import * as React from 'react';
import { IStyle } from 'office-ui-fabric-react/lib/Styling';
import { IBaseProps } from 'office-ui-fabric-react/lib/Utilities';
import { ICalendarViewRowHeaderProps } from '../CalendarViewRowHeader';
import { GetProperties } from '../WrappedChildren';
import { IThemingProps, IThemingStyleProps, IThemingStyles } from '../Theming';

/**
 * Row-header wrapping properties supported by CalendarViewRowHeaders.
 *
 * These properties allow consumers of CalendarViewRowHeaders to
 * override the default CalendarViewRowHeader control and to modify
 * how individual row headers are rendered.
 */
export interface ICalendarViewRowHeadersWrappingProps {
  /**
   * Type of React component that renders individual row headers.
   * Defaults to CalendarViewRowHeader.
   */
  rowHeaderType?: React.ComponentType<ICalendarViewRowHeaderProps>;

  /**
   * Properties applied to all row headers elements.
   */
  rowHeaderProps?: Partial<ICalendarViewRowHeaderProps>;

  /**
   * Callback to get properties of an individual row header.
   */
  getRowHeaderProps?: GetProperties<ICalendarViewRowHeaderProps>;
}

/** Properties of the CalendarViewRowHeaders component. */
export interface ICalendarViewRowHeadersProps extends
  IBaseProps,
  ICalendarViewRowHeadersWrappingProps,
  IThemingProps<ICalendarViewRowHeadersStyleProps, ICalendarViewRowHeadersStyles> {
  /** Content of the row headers */
  children: React.ReactNode[];
}

/** Properties used to define the styles of CalendarViewRowHeaders */
export type ICalendarViewRowHeadersStyleProps = IThemingStyleProps;

/** Styles of CalendarViewRowHeaders */
export interface ICalendarViewRowHeadersStyles extends IThemingStyles {
  /** Style for the row headers */
  rowHeader?: IStyle;
}
