import * as React from 'react';
import { autobind, BaseComponent, classNamesFunction, customizable } from 'office-ui-fabric-react/lib/Utilities';
import { FocusZone, IFocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { ICalendarViewGrid } from './CalendarViewGrid.types';
import { ICalendarViewGridProps } from './CalendarViewGrid.types';
import { ICalendarViewGridStyleProps } from './CalendarViewGrid.types';
import { ICalendarViewGridStyles } from './CalendarViewGrid.types';

const getClassNames = classNamesFunction<ICalendarViewGridStyleProps, ICalendarViewGridStyles>();

@customizable('CalendarViewGrid', ['theme'])
export class CalendarViewGridBase extends BaseComponent<ICalendarViewGridProps> implements ICalendarViewGrid {
  public static defaultProps: Partial<ICalendarViewGridProps> = {
  };

  private focusZone: IFocusZone;

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    return (
      <div className={ classNames.root }>
        <FocusZone componentRef={ this._setFocusZone }>
          <div>CalendarViewGrid</div>
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
