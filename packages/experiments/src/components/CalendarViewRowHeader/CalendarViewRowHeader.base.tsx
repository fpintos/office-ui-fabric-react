import * as React from 'react';
import { BaseComponent, classNamesFunction, customizable } from 'office-ui-fabric-react/lib/Utilities';
import { ICalendarViewRowHeaderProps } from './CalendarViewRowHeader.types';
import { ICalendarViewRowHeaderStyleProps } from './CalendarViewRowHeader.types';
import { ICalendarViewRowHeaderStyles } from './CalendarViewRowHeader.types';

const getClassNames = classNamesFunction<ICalendarViewRowHeaderStyleProps, ICalendarViewRowHeaderStyles>();

@customizable('CalendarViewRowHeader', ['theme'])
export class CalendarViewRowHeaderBase extends BaseComponent<ICalendarViewRowHeaderProps> {
  public static defaultProps: Partial<ICalendarViewRowHeaderProps> = {
    height: 60
  };

  public render(): JSX.Element {
    const { getStyles, theme, className, height } = this.props;
    const classNames = getClassNames(getStyles, {
      theme: theme!,
      className,
      height: height!
    });

    return (
      <div className={ classNames.root }>
        { this.props.children }
      </div>
    );
  }
}
