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
    headerType: CalendarViewRowHeader,
    headerProps: {},
  };

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    const { children: rowHeaders, headerType, headerProps, getHeaderProps } = this.props;

    return (
      <div className={ classNames.root }>
        {
          renderChildren(
            rowHeaders,
            headerType!,
            classNames.rowHeader,
            headerProps,
            getHeaderProps)
        }
      </div>
    );
  }
}


function renderChildren<P>(
  children: React.ReactNode[],
  componentType: React.ComponentType<P>,
  className: string,
  childrenProps?: Partial<P>,
  getChildProps?: (child: React.ReactNode, index: number) => Partial<P>
): React.ReactNode {
  return children.map((child, index) => {
    const childProps = getChildProps ? getChildProps(child, index) : undefined;
    return renderChild(
      index,
      child,
      componentType,
      className,
      childrenProps,
      childProps);
  });
}

function renderChild<P>(
  key: React.Key,
  child: React.ReactNode,
  componentType: React.ComponentType<P>,
  className: string,
  childrenProps?: Partial<P>,
  childProps?: Partial<P>
): React.ReactNode {
  const props = {
    className,
    ...(childrenProps as object),
    ...(childProps as object),
    key,
  } as P & React.Attributes;
  return React.createElement<P>(componentType, props, child);
}
