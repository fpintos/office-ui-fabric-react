import * as React from 'react'

export type GetProperties<P> = (child: React.ReactNode, index: number) => Partial<P>;

/** Interface that describes the properties of a wrapping element. */
export interface IWrappingComponent<P> {
  /** Type of the component to use as wrapping element. */
  wrapperType: React.ReactType<P>,
  /** Class name applied to the wrapping elements. */
  className?: string,
  /** Properties applied to each wrapping element. */
  properties?: Partial<P>,
  /** Callback to get properties applied to an individual wrapping element. */
  getProperties?: GetProperties<P>
}

/** Properties of the WrappedChildren component. */
export interface IWrappedChildrenProps<P> extends IWrappingComponent<P> {
  /** The set of child nodes, each of which is wrapped by an instance of the wrapping component. */
  children: React.ReactNode[],
}
