import { IStyle, ITheme } from '../../Styling';
import { IStyleFunction } from '../../Utilities';

export interface ICalendarDayView {
  /** Sets focus to the calendar view. */
  focus(): void;
}

export interface ICalendarDayViewProps {
  // BaseComponent
  /**
   * Optional callback to access the ICalendarDayView interface.
   * Use this instead of ref for accessing the public methods and properties of the component.
   * @defaultvalue undefined
   */
  componentRef?: (component: ICalendarDayView) => void;

  // Theming
  /**
   * Additional css class to apply to the control.
   * @defaultvalue undefined
   */
  className?: string;

  /** Base Theme */
  theme?: ITheme;

  /** Callback to get style overrides */
  getStyles?: IStyleFunction<ICalendarDayViewStyleProps, ICalendarDayViewStyles>;

  // CalendarDayView
  /**
   * The date to be displayed by the calendar view.
   */
  day: Date;
}

/** Properties used to define the styles of the CalendarDayView */
export interface ICalendarDayViewStyleProps {
  // Do not use nullables here; if needed, use 'type | undefined'.
  // This ensures the compiler will detect if we forget to pass one of the parameters.
  theme: ITheme;
  className: string | undefined;
}

/** Styles of the CalendarDayView */
export interface ICalendarDayViewStyles {
  /** Style for the root element. */
  root?: IStyle;
}
