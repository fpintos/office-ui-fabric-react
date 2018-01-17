import { ReactNode, ComponentType } from 'react';
import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunction, IBaseProps } from 'office-ui-fabric-react/lib/Utilities';
import { ICalendarViewRowHeaderProps } from 'src/CalendarViewRowHeader';

export interface ICalendarViewRowHeadersProps extends IBaseProps {
  // Theming
  /**
   * Additional css class to apply to the control.
   * @defaultvalue undefined
   */
  className?: string;

  /** Base Theme */
  theme?: ITheme;

  /** Callback to get style overrides */
  getStyles?: IStyleFunction<ICalendarViewRowHeadersStyleProps, ICalendarViewRowHeadersStyles>;

  // CalendarViewRowHeaders
  /** Content of the row headers */
  children: ReactNode[];
  /** Type of the React component that renders individual headers. Defaults to CalendarViewRowHeader. */
  headerType?: ComponentType<ICalendarViewRowHeaderProps>;
  /** Properties applied to all row headers elements. */
  headerProps?: Partial<ICalendarViewRowHeaderProps>
  /** Callback to get properties of an individual row header */
  getHeaderProps?: (rowHeader: ReactNode, index: number) => Partial<ICalendarViewRowHeaderProps>
}

/** Properties used to define the styles of CalendarViewRowHeaders */
export interface ICalendarViewRowHeadersStyleProps {
  // Do not use nullables here; if needed, use 'type | undefined'.
  // This ensures the compiler will detect if we forget to pass one of the parameters.
  theme: ITheme;
  className: string | undefined;
}

/** Styles of CalendarViewRowHeaders */
export interface ICalendarViewRowHeadersStyles {
  /** Style for the root element. */
  root?: IStyle;
  /** Style for the row headers */
  rowHeader?: IStyle;
}
