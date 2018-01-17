import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface ICalendarViewGridLines {
  /** Sets focus to the control. */
  focus(): void;
}

export interface ICalendarViewGridLinesProps {
  // BaseComponent
  /**
   * Optional callback to access the ICalendarViewGridLines interface.
   * Use this instead of ref for accessing the public methods and properties of the component.
   * @defaultvalue undefined
   */
  componentRef?: (component: ICalendarViewGridLines) => void;

  // Theming
  /**
   * Additional css class to apply to the control.
   * @defaultvalue undefined
   */
  className?: string;

  /** Base Theme */
  theme?: ITheme;

  /** Callback to get style overrides */
  getStyles?: IStyleFunction<ICalendarViewGridLinesStyleProps, ICalendarViewGridLinesStyles>;

  // CalendarViewGridLines
  // TODO: add extra properties here
}

/** Properties used to define the styles of CalendarViewGridLines */
export interface ICalendarViewGridLinesStyleProps {
  // Do not use nullables here; if needed, use 'type | undefined'.
  // This ensures the compiler will detect if we forget to pass one of the parameters.
  theme: ITheme;
  className: string | undefined;
}

/** Styles of CalendarViewGridLines */
export interface ICalendarViewGridLinesStyles {
  /** Style for the root element. */
  root?: IStyle;
}
