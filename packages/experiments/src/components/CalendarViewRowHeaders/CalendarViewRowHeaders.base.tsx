import * as React from 'react';
import { BaseComponent, classNamesFunction, customizable } from 'office-ui-fabric-react/lib/Utilities';
import { ICalendarViewRowHeadersProps } from './CalendarViewRowHeaders.types';
import { ICalendarViewRowHeadersStyleProps } from './CalendarViewRowHeaders.types';
import { ICalendarViewRowHeadersStyles } from './CalendarViewRowHeaders.types';
import { CalendarViewRowHeader } from '../CalendarViewRowHeader';
import { WrappedChildren } from '../WrappedChildren';

const getClassNames = classNamesFunction<ICalendarViewRowHeadersStyleProps, ICalendarViewRowHeadersStyles>();

@customizable('CalendarViewRowHeaders', ['theme'])
export class CalendarViewRowHeadersBase extends BaseComponent<ICalendarViewRowHeadersProps> {
  public static defaultProps: Partial<ICalendarViewRowHeadersProps> = {
    headerType: CalendarViewRowHeader,
    headerProps: {},
  };

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    const { children, headerType, headerProps, getHeaderProps } = this.props;

    return (
      <div className={ classNames.root }>
        <WrappedChildren
          componentType={ headerType! }
          className={ classNames.rowHeader }
          childrenProps={ headerProps }
          getChildProps={ getHeaderProps }>
          { children }
        </WrappedChildren>
      </div>
    );
  }
}
