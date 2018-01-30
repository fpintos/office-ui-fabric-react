import * as React from 'react';
import { BaseComponent, classNamesFunction, customizable } from 'office-ui-fabric-react/lib/Utilities';
import { ICalendarViewColumnHeaderProps } from './CalendarViewColumnHeader.types';
import { ICalendarViewColumnHeaderStyleProps } from './CalendarViewColumnHeader.types';
import { ICalendarViewColumnHeaderStyles } from './CalendarViewColumnHeader.types';

const getClassNames = classNamesFunction<ICalendarViewColumnHeaderStyleProps, ICalendarViewColumnHeaderStyles>();

@customizable('CalendarViewColumnHeader', ['theme'])
export class CalendarViewColumnHeaderBase extends BaseComponent<ICalendarViewColumnHeaderProps> {
  public static defaultProps: Partial<ICalendarViewColumnHeaderProps> = {
  };

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    return (
      <div className={ classNames.root }>
        { this.props.children }
      </div>
    );
  }
}
