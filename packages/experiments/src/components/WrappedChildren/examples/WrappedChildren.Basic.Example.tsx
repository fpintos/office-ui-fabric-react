import * as React from 'react';
import { WrappedChildren } from '../../WrappedChildren';

export class WrappedChildrenBasicExample extends React.Component {
  public render(): JSX.Element {
    return (
      <WrappedChildren wrapperType='button' className='sample'>
        { ['Hello', 'World'] }
      </WrappedChildren>
    );
  }
}
