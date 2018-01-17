import * as React from 'react';
import { BaseComponent, classNamesFunction, customizable } from 'office-ui-fabric-react/lib/Utilities';
import { ICalendarViewRowHeadersProps } from './CalendarViewRowHeaders.types';
import { ICalendarViewRowHeadersStyleProps } from './CalendarViewRowHeaders.types';
import { ICalendarViewRowHeadersStyles } from './CalendarViewRowHeaders.types';
import { CalendarViewRowHeader } from '../CalendarViewRowHeader';

const getClassNames = classNamesFunction<ICalendarViewRowHeadersStyleProps, ICalendarViewRowHeadersStyles>();

@customizable('CalendarViewRowHeaders', ['theme'])
export class CalendarViewRowHeadersBase extends BaseComponent<ICalendarViewRowHeadersProps> {
  public static defaultProps: Partial<ICalendarViewRowHeadersProps> = {
  };

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    return (
      <div className={ classNames.root }>
        { this.props.headers.map(content => <CalendarViewRowHeader content={ content } />) }
      </div>
    );
  }
}
