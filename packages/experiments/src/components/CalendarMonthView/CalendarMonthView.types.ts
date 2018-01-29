import { IStyle, ITheme } from '../../Styling';
import { IStyleFunction } from '../../Utilities';
import { DayOfWeek, FirstWeekOfYear } from 'office-ui-fabric-react/lib/utilities/dateValues/DateValues';
export { DayOfWeek, FirstWeekOfYear };

export interface ICalendarMonthView {
  /** Sets focus to the calendar view. */
  focus(): void;
}

export interface ICalendarMonthViewProps {
  // BaseComponent
  /**
   * Optional callback to access the ICalendarMonthView interface.
   * Use this instead of ref for accessing the public methods and properties of the component.
   * @defaultvalue undefined
   */
  componentRef?: (component: ICalendarMonthView) => void;

  // Theming
  /**
   * Additional css class to apply to the control.
   * @defaultvalue undefined
   */
  className?: string;

  /** Base Theme */
  theme?: ITheme;

  /** Callback to get style overrides */
  getStyles?: IStyleFunction<ICalendarMonthViewStyleProps, ICalendarMonthViewStyles>;

  // CalendarMonthView
  /**
   * The date of the month to be displayed by the calendar view.
   */
  month: Date;
  firstDayOfWeek: DayOfWeek;
  firstWeekOfYear: FirstWeekOfYear;
}

/** Properties used to define the styles of the CalendarMonthView */
export interface ICalendarMonthViewStyleProps {
  // Do not use nullables here; if needed, use 'type | undefined'.
  // This ensures the compiler will detect if we forget to pass one of the parameters.
  theme: ITheme;
  className: string | undefined;
}

/** Styles of the CalendarMonthView */
export interface ICalendarMonthViewStyles {
  /** Style for the root element. */
  root?: IStyle;
}
