import * as React from 'react'
import { IWrappedChildrenProps } from './WrappedChildren.types';

/** Component that wraps each child with a given wrapping element. */
export function WrappedChildren<P>(props: IWrappedChildrenProps<P>): JSX.Element {
  const { children, wrapperType: Component, className, properties, getProperties } = props;

  const wrappedChildren = children.map(
    (child, key) =>
      <Component
        key={ key }
        className={ className }
        {...properties}
        {...(getProperties ? getProperties(child, key) : undefined) }>
        { child }
      </Component>
  );

  return <>{ wrappedChildren }</>;
}
