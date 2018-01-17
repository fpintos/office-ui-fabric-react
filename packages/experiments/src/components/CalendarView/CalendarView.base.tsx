import * as React from 'react';
import { autobind, BaseComponent, classNamesFunction, customizable } from 'office-ui-fabric-react/lib/Utilities';
import { FocusZone, IFocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { ICalendarView } from './CalendarView.types';
import { ICalendarViewProps } from './CalendarView.types';
import { ICalendarViewStyleProps } from './CalendarView.types';
import { ICalendarViewStyles } from './CalendarView.types';
import { CalendarViewGrid } from '../CalendarViewGrid';
import { CalendarViewColumnHeaders } from '../CalendarViewColumnHeaders';
import { CalendarViewRowHeaders } from '../CalendarViewRowHeaders';
import { CalendarViewGridLines } from '../CalendarViewGridLines';

const getClassNames = classNamesFunction<ICalendarViewStyleProps, ICalendarViewStyles>();

@customizable('CalendarView', ['theme'])
export class CalendarViewBase extends BaseComponent<ICalendarViewProps> implements ICalendarView {
  public static defaultProps: Partial<ICalendarViewProps> = {
    rowHeaderWidth: '70px'
  };

  private focusZone: IFocusZone;

  public render(): JSX.Element {
    const { getStyles, theme, className, rowHeaderWidth } = this.props;
    const classNames = getClassNames(getStyles, {
      theme: theme!,
      className: className,
      rowHeaderWidth: rowHeaderWidth!,
    });

    const { columnHeaders } = this.props;

    const rowHeaders = ["12am"];
    for (let i = 1; i <= 11; i++) {
      rowHeaders.push(i.toString(10) + "am");
    }
    rowHeaders.push("12pm");
    for (let i = 1; i <= 11; i++) {
      rowHeaders.push(i.toString(10) + "pm");
    }

    return (
      <div className={ classNames.root }>
        <FocusZone componentRef={ this._setFocusZone }>
          <CalendarViewColumnHeaders className={ classNames.columnHeaders } headers={ columnHeaders } />
          <CalendarViewRowHeaders className={ classNames.rowHeaders } headers={ rowHeaders } />
          <CalendarViewGridLines className={ classNames.gridLines } />
          <CalendarViewGrid className={ classNames.grid } />
        </FocusZone>
      </div>
    );
  }

  public focus(): void {
    this.focusZone.focus();
  }

  @autobind
  private _setFocusZone(component: IFocusZone): void {
    this.focusZone = component;
  }
}
