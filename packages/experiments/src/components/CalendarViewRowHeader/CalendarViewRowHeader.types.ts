import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunction, IBaseProps } from 'office-ui-fabric-react/lib/Utilities';

export type CalendarViewRowHeaderContent = string;

export interface ICalendarViewRowHeaderProps extends IBaseProps {
  // Theming
  /**
   * Additional css class to apply to the control.
   * @defaultvalue undefined
   */
  className?: string;

  /** Base Theme */
  theme?: ITheme;

  /** Callback to get style overrides */
  getStyles?: IStyleFunction<ICalendarViewRowHeaderStyleProps, ICalendarViewRowHeaderStyles>;

  // CalendarViewRowHeader
  content: CalendarViewRowHeaderContent
}

/** Properties used to define the styles of CalendarViewRowHeader */
export interface ICalendarViewRowHeaderStyleProps {
  // Do not use nullables here; if needed, use 'type | undefined'.
  // This ensures the compiler will detect if we forget to pass one of the parameters.
  theme: ITheme;
  className: string | undefined;
}

/** Styles of CalendarViewRowHeader */
export interface ICalendarViewRowHeaderStyles {
  /** Style for the root element. */
  root?: IStyle;
}
