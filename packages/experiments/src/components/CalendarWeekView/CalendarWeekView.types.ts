import { IStyle, ITheme } from '../../Styling';
import { IStyleFunction } from '../../Utilities';

export interface ICalendarWeekView {
  /** Sets focus to the calendar view. */
  focus(): void;
}

export interface ICalendarWeekViewProps {
  // BaseComponent
  /**
   * Optional callback to access the ICalendarWeekView interface.
   * Use this instead of ref for accessing the public methods and properties of the component.
   * @defaultvalue undefined
   */
  componentRef?: (component: ICalendarWeekView) => void;

  // Theming
  /**
   * Additional css class to apply to the control.
   * @defaultvalue undefined
   */
  className?: string;

  /** Base Theme */
  theme?: ITheme;

  /** Callback to get style overrides */
  getStyles?: IStyleFunction<ICalendarWeekViewStyleProps, ICalendarWeekViewStyles>;

  // CalendarWeekView
  /**
   * The date of the first day to be displayed by the calendar view.
   */
  firstDay: Date;

  /**
   * Number of days to display.
   * @default 7
   */
  numberOfDays?: number;
}

/** Properties used to define the styles of the CalendarWeekView */
export interface ICalendarWeekViewStyleProps {
  // Do not use nullables here; if needed, use 'type | undefined'.
  // This ensures the compiler will detect if we forget to pass one of the parameters.
  theme: ITheme;
  className: string | undefined;
}

/** Styles of the CalendarWeekView */
export interface ICalendarWeekViewStyles {
  /** Style for the root element. */
  root?: IStyle;
}
