import * as React from 'react';
import { IStyle } from 'office-ui-fabric-react/lib/Styling';
import { IBaseProps } from 'office-ui-fabric-react/lib/Utilities';
import { ICalendarViewColumnHeaderProps } from '../CalendarViewColumnHeader';
import { GetProperties } from '../WrappedChildren';
import { IThemingProps, IThemingStyleProps, IThemingStyles } from '../Theming';

/**
 * Column-header wrapping properties supported by CalendarViewColumnHeaders.
 *
 * These properties allow consumers of CalendarViewColumnHeaders to
 * override the default CalendarViewColumnHeader control and to modify
 * how individual column headers are rendered.
 */
export interface ICalendarViewColumnHeadersWrappingProps {
  /**
   * Type of React component that renders individual column headers.
   * Defaults to CalendarViewColumnHeader.
   */
  columnHeaderType?: React.ComponentType<ICalendarViewColumnHeaderProps>;

  /**
   * Properties applied to all column headers elements.
   */
  columnHeaderProps?: Partial<ICalendarViewColumnHeaderProps>;

  /**
   * Callback to get properties of an individual column header.
   */
  getColumnHeaderProps?: GetProperties<ICalendarViewColumnHeaderProps>;
}

/** Properties of the CalendarViewColumnHeaders component. */
export interface ICalendarViewColumnHeadersProps extends
  IBaseProps,
  ICalendarViewColumnHeadersWrappingProps,
  IThemingProps<ICalendarViewColumnHeadersStyleProps, ICalendarViewColumnHeadersStyles> {
  /** Content of the column headers */
  children: React.ReactNode[];
}

/** Properties used to define the styles of CalendarViewColumnHeaders */
export type ICalendarViewColumnHeadersStyleProps = IThemingStyleProps;

/** Styles of CalendarViewColumnHeaders */
export interface ICalendarViewColumnHeadersStyles extends IThemingStyles {
  /** Style for the column headers */
  columnHeader?: IStyle;
}
