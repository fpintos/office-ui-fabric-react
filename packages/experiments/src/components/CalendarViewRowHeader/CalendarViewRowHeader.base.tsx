import * as React from 'react';
import { BaseComponent, classNamesFunction, customizable } from 'office-ui-fabric-react/lib/Utilities';
import { ICalendarViewRowHeaderProps } from './CalendarViewRowHeader.types';
import { ICalendarViewRowHeaderStyleProps } from './CalendarViewRowHeader.types';
import { ICalendarViewRowHeaderStyles } from './CalendarViewRowHeader.types';

const getClassNames = classNamesFunction<ICalendarViewRowHeaderStyleProps, ICalendarViewRowHeaderStyles>();

@customizable('CalendarViewRowHeader', ['theme'])
export class CalendarViewRowHeaderBase extends BaseComponent<ICalendarViewRowHeaderProps> {
  public static defaultProps: Partial<ICalendarViewRowHeaderProps> = {
  };

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    return (
      <div className={ classNames.root }>
        { this.props.content }
      </div>
    );
  }
}
