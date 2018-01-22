import { ReactNode, ReactType } from 'React';

export type GetChildProps<P> = (child: ReactNode, index: number) => Partial<P>;

export interface IWrappedChildrenProps<P> {
  children: ReactNode[],
  componentType: ReactType<P>,
  className?: string,
  childrenProps?: Partial<P>,
  getChildProps?: GetChildProps<P>
}
