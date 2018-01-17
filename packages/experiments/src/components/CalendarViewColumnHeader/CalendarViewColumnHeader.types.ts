import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunction, IBaseProps } from 'office-ui-fabric-react/lib/Utilities';

export type CalendarViewColumnHeaderContent = string;

export interface ICalendarViewColumnHeaderProps extends IBaseProps {
  // Theming
  /**
   * Additional css class to apply to the control.
   * @defaultvalue undefined
   */
  className?: string;

  /** Base Theme */
  theme?: ITheme;

  /** Callback to get style overrides */
  getStyles?: IStyleFunction<ICalendarViewColumnHeaderStyleProps, ICalendarViewColumnHeaderStyles>;

  // CalendarViewColumnHeader
  content: CalendarViewColumnHeaderContent
}

/** Properties used to define the styles of CalendarViewColumnHeader */
export interface ICalendarViewColumnHeaderStyleProps {
  // Do not use nullables here; if needed, use 'type | undefined'.
  // This ensures the compiler will detect if we forget to pass one of the parameters.
  theme: ITheme;
  className: string | undefined;
}

/** Styles of CalendarViewColumnHeader */
export interface ICalendarViewColumnHeaderStyles {
  /** Style for the root element. */
  root?: IStyle;
}
