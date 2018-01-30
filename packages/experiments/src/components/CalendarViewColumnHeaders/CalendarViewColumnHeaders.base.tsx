import * as React from 'react';
import { BaseComponent, classNamesFunction, customizable } from 'office-ui-fabric-react/lib/Utilities';
import { ICalendarViewColumnHeadersProps } from './CalendarViewColumnHeaders.types';
import { ICalendarViewColumnHeadersStyleProps } from './CalendarViewColumnHeaders.types';
import { ICalendarViewColumnHeadersStyles } from './CalendarViewColumnHeaders.types';
import { CalendarViewColumnHeader } from '../CalendarViewColumnHeader';
import { WrappedChildren } from '../WrappedChildren';

const getClassNames = classNamesFunction<ICalendarViewColumnHeadersStyleProps, ICalendarViewColumnHeadersStyles>();

@customizable('CalendarViewColumnHeaders', ['theme'])
export class CalendarViewColumnHeadersBase extends BaseComponent<ICalendarViewColumnHeadersProps> {
  public static defaultProps: Partial<ICalendarViewColumnHeadersProps> = {
    columnHeaderType: CalendarViewColumnHeader,
    columnHeaderProps: {},
  };

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    const { children, columnHeaderType, columnHeaderProps, getColumnHeaderProps } = this.props;

    return (
      <div className={ classNames.root }>
        <WrappedChildren
          wrapperType={ columnHeaderType! }
          className={ classNames.columnHeader }
          properties={ columnHeaderProps }
          getProperties={ getColumnHeaderProps }>
          { children }
        </WrappedChildren>
      </div>
    );
  }
}
