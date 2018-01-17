import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface ICalendarViewGridLine {
  /** Sets focus to the control. */
  focus(): void;
}

export interface ICalendarViewGridLineProps {
  // BaseComponent
  /**
   * Optional callback to access the ICalendarViewGridLine interface.
   * Use this instead of ref for accessing the public methods and properties of the component.
   * @defaultvalue undefined
   */
  componentRef?: (component: ICalendarViewGridLine) => void;

  // Theming
  /**
   * Additional css class to apply to the control.
   * @defaultvalue undefined
   */
  className?: string;

  /** Base Theme */
  theme?: ITheme;

  /** Callback to get style overrides */
  getStyles?: IStyleFunction<ICalendarViewGridLineStyleProps, ICalendarViewGridLineStyles>;

  // CalendarViewGridLine
  // TODO: add extra properties here
}

/** Properties used to define the styles of CalendarViewGridLine */
export interface ICalendarViewGridLineStyleProps {
  // Do not use nullables here; if needed, use 'type | undefined'.
  // This ensures the compiler will detect if we forget to pass one of the parameters.
  theme: ITheme;
  className: string | undefined;
}

/** Styles of CalendarViewGridLine */
export interface ICalendarViewGridLineStyles {
  /** Style for the root element. */
  root?: IStyle;
}
