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
    rowHeaderType: CalendarViewRowHeader,
    rowHeaderProps: {},
  };

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    const { children, rowHeaderType, rowHeaderProps, getRowHeaderProps } = this.props;

    return (
      <div className={ classNames.root }>
        <WrappedChildren
          wrapperType={ rowHeaderType! }
          className={ classNames.rowHeader }
          properties={ rowHeaderProps }
          getProperties={ getRowHeaderProps }>
          { children }
        </WrappedChildren>
      </div>
    );
  }
}
