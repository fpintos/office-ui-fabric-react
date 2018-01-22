import * as React from 'React'
import { IWrappedChildrenProps } from './WrappedChildren.types';
export { IWrappedChildrenProps };

export function WrappedChildren<P>(props: IWrappedChildrenProps<P>): JSX.Element {
  const { children, className, componentType, childrenProps, getChildProps } = props;

  return <>
    { children.map((child, key) => {
      const childProps = getChildProps ? getChildProps(child, key) : undefined;
      const props = {
        key,
        className,
        ...(childrenProps as object),
        ...(childProps as object),
      } as P & React.Attributes;
      return React.createElement<P>(
        componentType!,
        props,
        child);
    }) }
    </>;
}
