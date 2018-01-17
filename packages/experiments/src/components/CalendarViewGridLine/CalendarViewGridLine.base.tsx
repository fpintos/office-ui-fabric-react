import * as React from 'react';
import { autobind, BaseComponent, classNamesFunction, customizable } from 'office-ui-fabric-react/lib/Utilities';
import { FocusZone, IFocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { ICalendarViewGridLine } from './CalendarViewGridLine.types';
import { ICalendarViewGridLineProps } from './CalendarViewGridLine.types';
import { ICalendarViewGridLineStyleProps } from './CalendarViewGridLine.types';
import { ICalendarViewGridLineStyles } from './CalendarViewGridLine.types';

const getClassNames = classNamesFunction<ICalendarViewGridLineStyleProps, ICalendarViewGridLineStyles>();

@customizable('CalendarViewGridLine', ['theme'])
export class CalendarViewGridLineBase extends BaseComponent<ICalendarViewGridLineProps> implements ICalendarViewGridLine {
  public static defaultProps: Partial<ICalendarViewGridLineProps> = {
  };

  private focusZone: IFocusZone;

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    return (
      <div className={ classNames.root }>
        <FocusZone componentRef={ this._setFocusZone }>
          <div>CalendarViewGridLine</div>
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
