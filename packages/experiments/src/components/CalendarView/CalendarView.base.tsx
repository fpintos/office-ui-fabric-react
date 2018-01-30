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

const defaultRowHeaders = (Array.apply(null, Array(24)) as object[]).map(
  (_, h) => (h % 12 || 12) + (h < 12 ? "am" : "pm")
);

@customizable('CalendarView', ['theme'])
export class CalendarViewBase extends BaseComponent<ICalendarViewProps> implements ICalendarView {
  public static defaultProps: Partial<ICalendarViewProps> = {
    rowHeaders: defaultRowHeaders,
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

    const { columnHeaders, columnHeaderType, columnHeaderProps, getColumnHeaderProps } = this.props;
    const { rowHeaders, rowHeaderType, rowHeaderProps, getRowHeaderProps } = this.props;

    return (
      <FocusZone
        className={ classNames.root }
        componentRef={ this._setFocusZone }
      >
        <CalendarViewColumnHeaders
          className={ classNames.columnHeaders }
          columnHeaderType={ columnHeaderType }
          columnHeaderProps={ columnHeaderProps }
          getColumnHeaderProps={ getColumnHeaderProps }
        >
          { columnHeaders! }
        </CalendarViewColumnHeaders>
        <CalendarViewRowHeaders
          className={ classNames.rowHeaders }
          rowHeaderType={ rowHeaderType }
          rowHeaderProps={ rowHeaderProps }
          getRowHeaderProps={ getRowHeaderProps }
        >
          { rowHeaders! }
        </CalendarViewRowHeaders>
        <CalendarViewGridLines className={ classNames.gridLines } />
        <CalendarViewGrid className={ classNames.grid } />
      </FocusZone>
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
