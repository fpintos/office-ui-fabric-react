import * as React from 'react';
import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunction } from 'office-ui-fabric-react/lib/Utilities';
import { ICalendarViewRowHeadersWrappingProps } from '../CalendarViewRowHeaders';

export interface ICalendarView {
  /** Sets focus to the control. */
  focus(): void;
}

export interface ICalendarViewProps extends ICalendarViewRowHeadersWrappingProps {
  // BaseComponent
  /**
   * Optional callback to access the ICalendarView interface.
   * Use this instead of ref for accessing the public methods and properties of the component.
   * @defaultvalue undefined
   */
  componentRef?: (component: ICalendarView) => void;

  // Theming
  /**
   * Additional css class to apply to the control.
   * @defaultvalue undefined
   */
  className?: string;

  /** Base Theme */
  theme?: ITheme;

  /** Callback to get style overrides */
  getStyles?: IStyleFunction<ICalendarViewStyleProps, ICalendarViewStyles>;

  // CalendarView
  columnHeaders: React.ReactNode[],
  rowHeaders?: React.ReactNode[],

  /**
   * Width of the row headers. Defaults to 70px
   */
  rowHeaderWidth?: number | string
}

/** Properties used to define the styles of CalendarView */
export interface ICalendarViewStyleProps {
  // Do not use nullables here; if needed, use 'type | undefined'.
  // This ensures the compiler will detect if we forget to pass one of the parameters.
  theme: ITheme;
  className: string | undefined;
  rowHeaderWidth: number | string
}

/** Styles of CalendarView */
export interface ICalendarViewStyles {
  /** Style for the root element. */
  root?: IStyle;
  columnHeaders?: IStyle,
  rowHeaders?: IStyle,
  gridLines?: IStyle,
  grid?: IStyle,
}
