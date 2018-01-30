import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunction } from 'office-ui-fabric-react/lib/Utilities';

/** Theming Properties */
export interface IThemingPropsProps<
  TStylesProps extends IThemingPropsStyleProps = IThemingPropsStyleProps,
  TStyles extends IThemingPropsStyles = IThemingPropsStyles
  > {
  /**
   * Additional css class to apply to the control.
   * @defaultvalue undefined
   */
  className?: string;

  /** Base Theme */
  theme?: ITheme;

  /** Callback to get style overrides */
  getStyles?: IStyleFunction<TStylesProps, TStyles>;
}

/** Properties used to define the styles of a control. */
export interface IThemingPropsStyleProps {
  // Do not use nullables here; if needed, use 'type | undefined'.
  // This ensures the compiler will detect if we forget to pass one of the parameters.
  theme: ITheme;
  className: string | undefined;
}

/** Styles of a control */
export interface IThemingPropsStyles {
  /** Style for the root element. */
  root?: IStyle;
}
